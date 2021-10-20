import { useEffect, useRef, useState } from 'react';

import imgDoge from '../assets/img-doge.png';

import './DemoCanvas.scss';

// original dimensions: 2000x1200
const IMG_DOGE_WIDTH = 2000;
const IMG_DOGE_HEIGHT = IMG_DOGE_WIDTH * 0.6;

const WIDTH = 1600;
const GUTTER = 60;
const vW = 600;
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
    Draw.rect(ctx)('body', rect.body, '#ff6e6e');
    Draw.rect(ctx)('viewport', rect.viewport, '#7196ff');
    Draw.rect(ctx)('image box', rect.imgBox, '#22a782');
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
      <div className="row align-items-center justify-content-center m-auto pb-4">
        <div
          className="col-12 col-xl-1"
          style={{
            backgroundColor: '#111',
            alignSelf: 'stretch',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <h4 className="rotate-title">HOW&nbsp;&nbsp;IT&nbsp;WORKS</h4>
        </div>
        <div className="col flex-shrink-1 w-auto position-relative" style={{ backgroundColor: 'black' }}>
          <canvas style={{ backgroundColor: 'black' }} ref={canvas} width={WIDTH} height={HEIGHT} />
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              marginTop: GUTTER,
              marginRight: GUTTER,
            }}
          >
            <div style={{ textAlign: 'left', minWidth: 225 }}>
              <h3 style={{ marginBottom: GUTTER / 2 }}>CONTROLS</h3>
              <div>
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
              <div className="flex-shrink-1 flex-grow-0 w-auto">
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
