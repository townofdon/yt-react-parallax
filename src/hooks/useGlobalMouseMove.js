import React, { useContext, useEffect, useState } from 'react';

const GlobalMouseCoordsContext = React.createContext(undefined);

export const GlobalMouseMoveProvider = ({ children }) => {
  const [mouseCoords, setMouseCoords] = useState([
    // x
    0,
    // y
    0,
  ]);

  useEffect(() => {
    let currentMouseX = 0;
    let currentMouseY = 0;
    let currentWinWidth = window.innerWidth || 0;
    let currentWinHeight = window.innerHeight || 0;
    let prevMouseX = currentMouseX;
    let prevMouseY = currentMouseY;
    let prevWinWidth = currentWinWidth;
    let prevWinHeight = currentWinHeight;

    const onTick = () => {
      // prettier-ignore
      if (
        prevMouseX !== currentMouseX ||
        prevMouseY !== currentMouseY ||
        prevWinWidth !== currentWinWidth ||
        prevWinHeight !== currentWinHeight
      ) {
        setMouseCoords([
          // horizontal distance from center of screen
          -(currentWinWidth * 0.5 - currentMouseX) / (currentWinWidth * 0.5),
          // vertical distance from center of screen
          (currentWinHeight * 0.5 - currentMouseY) / (currentWinHeight * 0.5),
        ]);
      }

      prevMouseX = currentMouseX;
      prevMouseY = currentMouseY;
      prevWinWidth = currentWinWidth;
      prevWinHeight = currentWinHeight;
      window.requestAnimationFrame(onTick);
    };
    onTick();

    const onMouseMove = (e) => {
      currentMouseX = e.clientX;
      currentMouseY = e.clientY;
    };

    const onResize = (e) => {
      currentWinHeight = window.innerHeight || 0;
      currentWinWidth = window.innerWidth || 0;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
    };
  }, [setMouseCoords]);

  return <GlobalMouseCoordsContext.Provider value={mouseCoords}>{children}</GlobalMouseCoordsContext.Provider>;
};

export const useGlobalMouseMove = () => {
  const mouseCoords = useContext(GlobalMouseCoordsContext);

  if (mouseCoords === undefined) throw new Error('useGlobalMouseMove must be used inside a GlobalMouseMoveProvider');

  return mouseCoords;
};
