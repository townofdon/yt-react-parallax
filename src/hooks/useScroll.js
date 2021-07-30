import { useEffect, useRef } from 'react';

export const useScroll = (onScroll = (scrollY = 0, winHeight = 0) => {}) => {
  // use a ref to avoid an infinite loop when passing `onScroll` to useEffect dependency array
  const _onScroll = useRef(onScroll);
  _onScroll.current = onScroll;

  useEffect(() => {
    let currentScrollY = window.pageYOffset || 0;
    let currentWinHeight = window.innerHeight || 0;
    let ticking = false;

    const onNextFrame = () => {
      if (ticking) return;

      window.requestAnimationFrame(() => {
        _onScroll.current(currentScrollY, currentWinHeight);
        ticking = false;
      });

      ticking = true;
    };

    const onScroll = (e) => {
      currentScrollY = window.pageYOffset || 0;
      onNextFrame();
    };

    const onResize = (e) => {
      currentWinHeight = window.innerHeight || 0;
      onNextFrame();
    };

    window.addEventListener('resize', onResize);
    document.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('resize', onResize);
      document.removeEventListener('scroll', onScroll);
    };
  }, [_onScroll]);
};
