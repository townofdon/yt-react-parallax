import { useEffect, useRef, useState } from 'react';

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
  const canvas = useRef(null);

  const draw = () => {
    if (!canvas.current || !canvas.current.getContext) return;

    const Δ1 = scroll / SCROLL_MAX;
    const Δ2 = scroll / SCROLL_MAX;

    var ctx = canvas.current.getContext('2d');
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    Draw.rect(ctx)('body', GUTTER, GUTTER, vW, HEIGHT - GUTTER * 2);
    Draw.rect(ctx)('viewport', spread(range, 1), GUTTER + (HEIGHT - vH - GUTTER * 2) * Δ1, vW, vH, 'blue');
    Draw.rect(ctx)('image box', spread(range, 2), GUTTER + vH, vW, vH, 'green');
    Draw.rect(ctx)('plx background', spread(range, 3), vH + GUTTER * Δ2, vW, GUTTER + vH, 'darkmagenta');
    ctx.font = '20px sans-serif';
    ctx.fillText('0', GUTTER / 2, GUTTER + 15);
    ctx.fillText('100', GUTTER / 2 - 20, HEIGHT - GUTTER);
  };
  const drawRef = useRef(draw);
  drawRef.current = draw;

  useEffect(() => {
    drawRef.current();
  }, [drawRef, range, scroll]);

  return (
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
  );
};

const Draw = {
  rect:
    (ctx) =>
    (label = 'RECT', x, y, width, height, color = 'red') => {
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
