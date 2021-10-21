import * as React from 'react';

export function SvgMountain({
  id = 'montana-01',
  path = 'M 0 100 L 0 27.311513099994045 L 50 49.713469452399295 L 100 60.966224285948556 L 150 60.29210003762273 L 200 67.6211441794294 L 250 53.47627039736835 L 300 51.59677524789004 L 350 56.54348276293604 L 400 53.20248053612886 L 450 40.32254206686048 L 500 42.86594173609046 L 550 61.63791321887402 L 600 62.37077870609937 L 650 72.20020388922421 L 700 81.07137378974585 L 750 64.18598836025922 L 800 75.39564808103023 L 850 68.83039583190111 L 900 50.64962363539962 L 950 70.27358828781871 L 1000 54.879297215666156 L 1050 60.62925040459959 L 1100 65.24202932341723 L 1150 63.35042986756889 L 1200 29.71678086760221 L 1250 43.31499791442184 L 1300 48.78363913594512 L 1350 64.25060887559084 L 1400 63.906558316375595 L 1450 51.158890492562904 L 1440 100 L 0 100',
  color1 = '#b5179e',
  color2 = 'rgba(0, 0, 0, 1)',
  color3 = color2,
  strokeWidth = 0,
  height = 100,
  transformX = 0,
  transformY = 0,
  ...props
}) {
  const svg = (
    <svg
      className="svg-mountain"
      viewBox={`0 0 1440 ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      width={1440}
      height={height}
      {...props}
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop
            offset="25%"
            style={{
              stopColor: color1,
              stopOpacity: 1,
            }}
          />
          <stop
            offset="100%"
            style={{
              stopColor: color2,
              stopOpacity: 1,
            }}
          />
        </linearGradient>
      </defs>
      <path fill={`url(#${id})`} stroke={color1} strokeWidth={strokeWidth} d={path} />
    </svg>
  );

  return (
    <div
      className="svg-mountain-container"
      style={{ transform: `translate(${transformX}px, ${transformY}px) scale(1.2)` }}
    >
      {svg}
      <div
        className="svg-mountain-bottom-fill"
        style={{ background: `linear-gradient(180deg, ${color2} 0%, ${color3} 100%)` }}
      />
    </div>
  );
}
