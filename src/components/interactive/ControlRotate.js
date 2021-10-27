import { useContext } from 'react';

import { ScrollableAreaContext } from './ScrollableArea';
import Easing from '../../utils/Easing';

export const ControlRotate = ({ children, className, from = 0, to = 0, ease = Easing.linear, style = {} }) => {
  const pctProgress = useContext(ScrollableAreaContext) || 0;

  const easedProgress = ease(pctProgress, 0, 1, 1);
  const inverse = 1 - easedProgress;

  const r = from * inverse + to * easedProgress;

  return (
    <span className={className} style={{ transform: `rotate(${r}deg`, display: 'inline-block', ...style }}>
      {children}
    </span>
  );
};
