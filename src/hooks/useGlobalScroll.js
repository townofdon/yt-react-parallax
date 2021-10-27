//
// ONE SCROLL LISTENER TO RULE THEM ALL
// ONE RESIZE LISTENER TO FIND THEM
// ONE WINDOW HEIGHT CALCULATED ONCE
// AND ONE DOC HEIGHT TO BIND TO
//

import React, { useContext, useEffect, useRef, useState } from 'react';

const GlobalScrollContext = React.createContext(undefined);
const GlobalWinHeightContext = React.createContext(undefined);
const GlobalDocHeightContext = React.createContext(undefined);

export const GlobalScrollProvider = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [winHeight, setWinHeight] = useState(0);
  const [docHeight, setDocHeight] = useState(0);

  // Cached refs just used for useEffect dependency
  const _scrollY = useRef(scrollY);
  const _winHeight = useRef(winHeight);
  const _docHeight = useRef(docHeight);
  _scrollY.current = scrollY;
  _winHeight.current = winHeight;
  _docHeight.current = docHeight;

  useEffect(() => {
    let currentScrollY = _scrollY.current || 0;
    let currentWinHeight = _winHeight.current || 0;
    let currentDocHeight = _docHeight.current || 0;
    let prevScrollY = currentScrollY || 0;
    let prevWinHeight = currentWinHeight || 0;
    let prevDocHeight = currentDocHeight || 0;
    let animationId = null;

    const onTick = () => {
      if (currentScrollY !== prevScrollY) setScrollY(currentScrollY);
      if (currentWinHeight !== prevWinHeight) setWinHeight(currentWinHeight);
      if (currentDocHeight !== prevDocHeight) setDocHeight(currentDocHeight);

      prevScrollY = currentScrollY;
      prevWinHeight = currentWinHeight;
      prevDocHeight = currentDocHeight;
      animationId = window.requestAnimationFrame(onTick);
    };

    onTick();

    const onScroll = (e) => {
      currentScrollY = window.pageYOffset || 0;
    };

    const onResize = (e) => {
      currentWinHeight = window.innerHeight || 0;
      currentDocHeight = document.body.clientHeight || 0;
    };

    onResize();

    window.addEventListener('resize', onResize);
    document.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('resize', onResize);
      document.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationId);
    };
  }, [_scrollY, _winHeight, _docHeight]);

  return (
    <div>
      <GlobalScrollContext.Provider value={scrollY}>
        <GlobalWinHeightContext.Provider value={winHeight}>
          <GlobalDocHeightContext.Provider value={docHeight}>{children}</GlobalDocHeightContext.Provider>
        </GlobalWinHeightContext.Provider>
      </GlobalScrollContext.Provider>
    </div>
  );
};

export const useGlobalScroll = () => {
  const scrollY = useContext(GlobalScrollContext);
  const winHeight = useContext(GlobalWinHeightContext);
  const docHeight = useContext(GlobalDocHeightContext);

  if (scrollY === undefined || winHeight === undefined || docHeight === undefined) {
    throw new Error('useGlobalScroll must be used inside a GlobalScrollProvider');
  }

  return [scrollY || 0, winHeight || 0, docHeight || 0];
};
