import { useEffect, useRef } from 'react';

export const useOnScroll = (onScroll = (scrollY = 0, winHeight = 0) => {}) => {
  // use a ref to avoid an infinite loop when passing `onScroll` to useEffect dependency array
  const _onScroll = useRef(onScroll);
  _onScroll.current = onScroll;

  useEffect(() => {
    let currentScrollY = window.pageYOffset || 0;
    let currentWinHeight = window.innerHeight || 0;
    let prevScrollY = currentScrollY;
    let animationId = null;

    const onTick = () => {
      if (currentScrollY !== prevScrollY) {
        _onScroll.current(currentScrollY, currentWinHeight);
      }

      prevScrollY = currentScrollY;
      animationId = window.requestAnimationFrame(onTick);
    };

    onTick();

    const onScroll = (e) => {
      currentScrollY = window.pageYOffset || 0;
    };

    const onResize = (e) => {
      currentWinHeight = window.innerHeight || 0;
    };

    window.addEventListener('resize', onResize);
    document.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('resize', onResize);
      document.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationId);
    };
  }, [_onScroll]);
};
