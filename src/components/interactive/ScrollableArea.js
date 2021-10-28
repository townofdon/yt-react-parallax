import React, { useEffect, useRef } from 'react';
import { useGlobalScroll } from '../../hooks/useGlobalScroll';
import { useRect } from '../../hooks/useRect';
import { Maths } from '../../utils/Maths';

export const ScrollableAreaContext = React.createContext(false);

export const ScrollableArea = ({
  id = undefined,
  className = undefined,
  viewportHeight = 100,
  clamp = true,
  debug = false,
  debugLabel = '',
  children,
  style = {},
  startAtScreenTop = false,
}) => {
  const ref = useRef(null);
  const [scrollY, winHeight] = useGlobalScroll();
  const [initialized, rect] = useRect(ref);

  const scrollProgress = initialized
    ? getScrollProgress(scrollY, rect.top, rect.bottom, winHeight, clamp, startAtScreenTop)
    : 0;

  useEffect(() => {
    if (debug)
      console.log(
        debugLabel || (ref.current && ref.current.id) || 'RECT_CALC',
        `INIT=`,
        initialized,
        `TOP=`,
        rect.top,
        `BOTTOM=`,
        rect.bottom,
      );
  }, [debug, debugLabel, initialized, rect]);

  // prettier-ignore
  if (debug) console.log(debugLabel || (ref.current && ref.current.id) || 'SCRL_%=', scrollProgress, 'SCRL_Y=', scrollY);

  return (
    <div
      id={id}
      ref={ref}
      className={className}
      style={{
        minHeight: `${viewportHeight}vh`,
        backgroundColor: debug ? 'rgba(255, 0, 0, 0.5)' : 'transparent',
        ...style,
      }}
    >
      {/* prettier-ignore */}
      <ScrollableAreaContext.Provider value={Number(scrollProgress) || 0}>
        {children}
      </ScrollableAreaContext.Provider>
    </div>
  );
};

/**
 * Get the scroll progress percentage (integer)
 *
 * **WHAT THE VALUES MEAN**
 *
 * 0    => The element's top border is at the very bottom of the viewport (_just out of view_)
 * 0.25 => The element's top border is in the middle of the viewport (_assuming the element is 100% viewport height_)
 * 0.5  => The element's top border is at the very top of the viewport
 * 0.75 => The element's bottom border is in the middle of the viewport (_assuming the element is 100% viewport height_)
 * 1    => The element's bottom border is at the very top of the viewport (_just out of view_)
 *
 * **EXCEPTIONS**
 *
 * 1. The element's top border is at the very top of the document (AND element's bottom border is NOT at the very bottom of the document):
 *    0   => The element's top border is at the very top of the viewport
 *    0.5 => The element's bottom border is in the middle of the viewport (_assuming the element is 100% viewport height_)
 *    1    => The element's bottom border is at the very top of the viewport (_just out of view_)
 * 2. The element's bottom border is at the very bottom of the document (AND element's top border is NOT at the very top of the document):
 *    0    => The element's top border is at the very bottom of the viewport (_just out of view_)
 *    0.5 => The element's top border is in the middle of the viewport (_assuming the element is 100% viewport height_)
 *    1  => The element's top border is at the very top of the viewport
 *
 * TL;DR:
 * - When an element is at the very top of the document, its scrollProgress starts at 0 with it already in view
 * - When an element is at the very bottom of the document, its scrollProgress ends at 1 with it still in view
 */
function getScrollProgress(
  scrollY = 0,
  containerTopY = 0,
  containerBottomY = 0,
  winHeight = 0,
  clamp = false,
  startAtScreenTop = false,
) {
  if (!containerBottomY || containerBottomY - containerTopY <= 0) return -1;

  const min = startAtScreenTop ? containerTopY : Math.max(containerTopY - winHeight, 0);
  const max = Math.min(document.body.scrollHeight - winHeight, containerBottomY);

  const pctProgress = (scrollY - min) / (max - min);

  if (!clamp) return pctProgress;

  return Maths.clampVal(pctProgress, 0, 1);
}
