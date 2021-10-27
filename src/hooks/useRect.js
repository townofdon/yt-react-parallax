import { useEffect, useState } from 'react';

const defaultRect = () => ({
  top: undefined,
  left: undefined,
  buttom: undefined,
  right: undefined,
  width: undefined,
  height: undefined,
});

/**
 * Get the rect bounding box for a node excluding any transformations.
 * see: https://stackoverflow.com/questions/27745438/how-to-compute-getboundingclientrect-without-considering-transforms
 */
export const useRect = (nodeRef = { current: null }) => {
  const [initialized, setInitialized] = useState(false);
  const [rect, setRect] = useState(defaultRect());

  useEffect(() => {
    // rect.current = calcPosition(nodeRef.current);
    setRect(calcPosition(nodeRef.current));
    setInitialized(true);
  }, [setInitialized, setRect, nodeRef]);

  const recalculate = () => {
    const calculated = calcPosition(nodeRef.current);
    setRect(calculated);
    return calculated;
  };

  return [initialized, rect, recalculate];
};

const calcPosition = (node) => {
  if (!node) return defaultRect();

  // const style = getComputedStyle(node);
  // if (!style || !style.transform) return node.getBoundingClientRect();

  let el = node;
  let offsetLeft = 0;
  let offsetTop = 0;

  do {
    offsetLeft += el.offsetLeft;
    offsetTop += el.offsetTop;

    el = el.offsetParent;
  } while (el);

  return {
    top: offsetTop,
    left: offsetLeft,
    bottom: offsetTop + node.offsetHeight,
    right: offsetLeft + node.offsetWidth,
  };
};

// const calcPosition2 = (el) => {
//   if (!el)
//     return {
//       top: undefined,
//       left: undefined,
//       buttom: undefined,
//       right: undefined,
//       width: undefined,
//       height: undefined,
//     };

//   let rect = el.getBoundingClientRect();
//   let style = getComputedStyle(el);
//   let tx = style.transform;

//   if (tx) {
//     let sx, sy, dx, dy;
//     if (tx.startsWith('matrix3d(')) {
//       let ta = tx.slice(9, -1).split(/, /);
//       sx = +ta[0];
//       sy = +ta[5];
//       dx = +ta[12];
//       dy = +ta[13];
//     } else if (tx.startsWith('matrix(')) {
//       let ta = tx.slice(7, -1).split(/, /);
//       sx = +ta[0];
//       sy = +ta[3];
//       dx = +ta[4];
//       dy = +ta[5];
//     } else {
//       return rect;
//     }

//     let to = style.transformOrigin;
//     let x = rect.x - dx - (1 - sx) * parseFloat(to);
//     let y = rect.y - dy - (1 - sy) * parseFloat(to.slice(to.indexOf(' ') + 1));
//     let w = sx ? rect.width / sx : el.offsetWidth;
//     let h = sy ? rect.height / sy : el.offsetHeight;
//     return {
//       x: x,
//       y: y + scrollY,
//       width: w,
//       height: h,
//       top: y + scrollY,
//       right: x + w,
//       bottom: y + h + scrollY,
//       left: x,
//     };
//   } else {
//     return rect;
//   }
// };
