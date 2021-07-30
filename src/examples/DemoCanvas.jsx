import { useEffect, useRef, useState } from 'react';

import imgDoge from '../assets/img-doge.png';

const IMG_DOGE_WIDTH = 2000;
const IMG_DOGE_HEIGHT = 1200;

const WIDTH = 800;
const GUTTER = 60;
const vW = 300;
const vH = vW * 0.5625;
const HEIGHT = vH * 3 + GUTTER * 2;
const RANGE_MAX = 75;
const SCROLL_MAX = 100;

export const DemoCanvas = () => {
  const [range, setRange] = useState(30);
  const [scroll, setScroll] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const canvas = useRef(null);
  const img = useRef(null);

  const initImages = () => {
    img.current = new Image();
    // prettier-ignore
    img.current.addEventListener('load', () => {
      setImageLoaded(true);
      drawRef.current();
    }, false);
    img.current.src = imgDoge;
  };

  const draw = () => {
    if (!canvas.current || !canvas.current.getContext) return;
    if (!imageLoaded) return;

    const Δ1 = scroll / SCROLL_MAX;
    const Δ2 = scroll / SCROLL_MAX;

    const rect = {
      body: {
        x: GUTTER,
        y: GUTTER,
        width: vW,
        height: HEIGHT - GUTTER * 2,
      },
      viewport: {
        x: spread(range, 1),
        y: GUTTER + (HEIGHT - vH - GUTTER * 2) * Δ1,
        width: vW,
        height: vH,
      },
      imgBox: {
        x: spread(range, 2),
        y: GUTTER + vH,
        width: vW,
        height: vH,
      },
      plxBg: {
        x: spread(range, 3),
        y: vH + GUTTER * Δ2,
        width: vW,
        height: GUTTER + vH,
      },
    };
    const imgPos = {
      x: spread(range, 3),
      y: Math.max(rect.viewport.y, rect.imgBox.y),
      width: rect.plxBg.width + GUTTER - spread(range, 2),
      height: Math.min(
        rect.viewport.y + rect.viewport.height - rect.imgBox.y,
        rect.imgBox.y + rect.imgBox.height - rect.viewport.y,
      ),
    };
    const imgCrop = {
      x: 0,
      y: ((imgPos.y - rect.plxBg.y) * IMG_DOGE_HEIGHT) / rect.plxBg.height,
      width: (imgPos.width * IMG_DOGE_WIDTH) / rect.plxBg.width,
      height: (imgPos.height * IMG_DOGE_HEIGHT) / rect.plxBg.height,
    };

    var ctx = canvas.current.getContext('2d');
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    Draw.rect(ctx)('body', rect.body);
    Draw.rect(ctx)('viewport', rect.viewport, 'blue');
    Draw.rect(ctx)('image box', rect.imgBox, 'green');
    Draw.rect(ctx)('plx background', rect.plxBg, 'darkmagenta');

    ctx.font = '20px sans-serif';
    ctx.fillText('0', GUTTER / 2, GUTTER + 15);
    ctx.fillText('100', GUTTER / 2 - 20, HEIGHT - GUTTER);

    ctx.globalAlpha = 0.1;
    ctx.drawImage(img.current, rect.plxBg.x, rect.plxBg.y, rect.plxBg.width, rect.plxBg.height);
    ctx.globalAlpha = 0.8;
    ctx.drawImage(
      img.current,
      imgCrop.x,
      imgCrop.y,
      imgCrop.width,
      imgCrop.height,
      imgPos.x,
      imgPos.y,
      imgPos.width,
      imgPos.height,
    );
  };
  const drawRef = useRef(draw);
  drawRef.current = draw;

  useEffect(() => {
    drawRef.current();
    initImages();
  }, [drawRef, range, scroll]);

  return (
    <div>
      <div className="row container align-items-center justify-content-center m-auto py-4">
        <div className="col flex-shrink-1 flex-grow-0 w-auto">
          <h1 style={{ transform: 'rotate(-90deg)' }}>Demo</h1>
        </div>
        <div className="col flex-shrink-1 flex-grow-0 w-auto">
          <canvas style={{ backgroundColor: 'whitesmoke' }} ref={canvas} width={WIDTH} height={HEIGHT} />
          <div className="d-flex align-items-center justify-content-center">
            <div className="row">
              <div className="col align-items-center justify-content-center">
                <input
                  id="sliderScroll"
                  type="range"
                  min="0"
                  max="100"
                  value={scroll}
                  className="slider"
                  onChange={(ev) => {
                    setScroll(Number(ev.target.value));
                  }}
                />
                <p>Scroll Y: {scroll}</p>
              </div>
              <div className="col flex-shrink-1 flex-grow-0 w-auto">
                <input
                  id="sliderRange"
                  type="range"
                  min="0"
                  max="100"
                  value={range}
                  className="slider"
                  onChange={(ev) => {
                    setRange(Number(ev.target.value));
                  }}
                />
                <p style={{ whiteSpace: 'nowrap' }}>Horizontal Spread: {range}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-5">
        <p className="constrain mb-3">
          Tip: use the two sliders above for a demonstration of how different elements on the screen move relative to
          each other with the scrolling parallax effect.
        </p>
        <p className="constrain">
          The portions of &nbsp;
          <code>plx background</code>&nbsp; outside of the green&nbsp;<code>image box</code> are cropped.
        </p>
      </div>
    </div>
  );
};

const Draw = {
  rect:
    (ctx) =>
    (label = 'RECT', rect, color = 'red') => {
      const { x, y, width, height } = rect;
      const tempStrokeStyle = ctx.strokeStyle;
      const tempFillStyle = ctx.fillStyle;
      ctx.font = '10px sans-serif';
      ctx.fillStyle = color;
      ctx.fillText(label, x + 10, y + 20);
      ctx.strokeStyle = color;
      ctx.strokeRect(x, y, width, height);
      ctx.strokeStyle = tempStrokeStyle;
      ctx.fillStyle = tempFillStyle;
    },
};

const spread = (range, amount = 1) => {
  return GUTTER + ((GUTTER * range) / RANGE_MAX) * amount;
};

// const dogespectRatio = (num) => {
//   // so ratio
//   // much wow
//   return num *
// };
