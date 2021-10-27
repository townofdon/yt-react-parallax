import { useRef, useState } from 'react';

// import { useRect } from '../hooks/useRect';
import { useOnScroll } from '../../hooks/useOnScroll';

import './Image.scss';

export const Image = ({
  src = '',
  alt = '',
  height,
  children,
  fixed = false,
  speed = 1,
  clamp = false,
  debug = false,
}) => {
  const box = useRef(null);
  const img = useRef(null);
  const [ΔY, setΔY] = useState(0);

  // const [boxInitialized, boxRect] = useRect(box);
  // const [imgInitialized, imgRect] = useRect(img);

  useOnScroll((scrollY, winHeight) => {
    if (fixed) return;
    if (!box.current) return;
    if (!img.current) return;
    // if (!boxInitialized.current || !box.current || !boxRect.current) return;
    // if (!imgInitialized.current || !img.current || !imgRect.current) return;

    const boxRect = box.current.getBoundingClientRect();

    const winBottom = scrollY + winHeight;
    const boxTop = boxRect.top + scrollY;
    const boxBottom = boxRect.bottom + scrollY;
    const boxHeight = boxRect.height;
    const pct = (clampVal(winBottom, boxTop, boxBottom + winHeight) - boxTop) / (boxHeight + winHeight);

    const imgHeight = img.current.offsetHeight;
    // const imgTop = img.current.getBoundingClientRect().y;
    // const imgHeight = img.current.innerHeight;
    // const imgBottom = imgTop + imgHeight;

    if (imgHeight < boxHeight) {
      console.warn(
        `parallax effect doesn't work if image is smaller than the bounding box. imgHeight=${imgHeight} boxHeight=${boxHeight}`,
      );
      return;
    }

    // calculate the distance that the image needs to traverse
    // speed: 2  >> start: -diff*2 end: diff
    // speed: 1  >> start: -diff   end: 0
    // speed: 0  >> start: -diff/2 end: -diff/2   <-- image is centered
    // speed: -1 >> start: 0       end: -diff
    // speed: -2 >> start: diff    end: -diff*2
    const diff = imgHeight - boxHeight;
    const deltaY =
      // starting offset
      (0 - diff - diff * speed) * 0.5 +
      // distance travelled to reach end
      diff * pct * speed;

    if (clamp) {
      setΔY(clampVal(deltaY, -diff, 0));
    } else {
      setΔY(deltaY);
    }

    // const start = (-diff - diff * speed) / 2;
    // const distance = diff * pct * speed;

    // if (clamp) {
    //   setΔY(clampVal(start + distance, -diff, 0));
    // } else {
    //   setΔY(start + distance);
    // }
    // prettier-ignore
    // setΔY(speed > 0
    //   ? clamp(-diff * speed + diff * pct * speed, -diff, 0)
    //   : clamp(diff * pct * speed, -diff, 0)
    // );

    // img.current.style.transform = `translate(0, ${ΔY}px)`;

    // prettier-ignore
    if (debug) console.log({
      pct,
      ΔY,
      // imgHeight,
      // boxHeight,
      // winBottom,
      // height,
      // boxTop,
      // boxBottom,
      // imgTop,
      // imgBottom,
      // 'clamp()': clamp(winBottom, boxTop, boxBottom),
    });
  });

  return (
    <div ref={box} className="image-box" style={{ height: height || undefined }}>
      {fixed ? (
        <div
          className="image-bg dark-overlay"
          style={{ backgroundImage: `url(${src})`, height: height || undefined }}
        />
      ) : (
        <img
          ref={img}
          className="image-behind"
          src={src}
          alt={alt}
          style={{
            transform: `translate(0, ${ΔY}px)`,
          }}
        />
      )}
      {Boolean(children) && <div className="image-content">{children}</div>}
    </div>
  );
};

const clampVal = (num = 0, min = 0, max = 0) => {
  return Math.max(min, Math.min(num, max));
};
