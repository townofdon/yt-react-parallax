import { useContext } from 'react';
import { useGlobalMouseMove } from '../../hooks/useGlobalMouseMove';
import Easing from '../../utils/Easing';
import { ScrollableAreaContext } from './ScrollableArea';

export const ControlTranslate = ({
  children,
  scrollFromX = 0,
  scrollFromY = 0,
  scrollToX = 0,
  scrollToY = 0,
  mouseOffsetX = 0,
  mouseOffsetY = 0,
  ease = Easing.linear,
}) => {
  const [mouseX, mouseY] = useGlobalMouseMove();
  const pctProgress = useContext(ScrollableAreaContext) || 0;

  const easedProgress = ease(pctProgress, 0, 1, 1);
  const inverse = 1 - easedProgress;

  const x = scrollFromX * inverse + scrollToX * easedProgress + mouseOffsetX * mouseX;
  const y = scrollFromY * inverse + scrollToY * easedProgress + mouseOffsetY * mouseY;

  return <div style={{ transform: `translate(${x}px, ${y}px)` }}>{children}</div>;
};
