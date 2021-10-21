import * as React from 'react';

import './SvgTree.scss';

// SOURCE: https://codepen.io/lukeandrewreid/pen/BNJddO

export function SvgTree({ size = 400, ...props }) {
  const width = size;
  const height = (width / 400) * 300;
  return (
    <svg height={`${height}px`} width={`${width}px`} viewBox={`0 0 300 400`} {...props}>
      <ellipse
        cx={188}
        cy={273}
        rx={80}
        ry={20}
        style={{
          fill: 'url(#shadow)',
          opacity: 0.3,
        }}
      />
      <ellipse
        cx={188}
        cy={273}
        rx={24}
        ry={5}
        style={{
          fill: 'url(#shadow)',
        }}
      />
      <polygon points="182,211 187,211 187,274 180,274" fill="url(#trunkgrad)" />
      <polygon points="187,211 196,211 198,274 187,274" className="brown-dark" />
      <polygon points="187,28 154,162 116,159" className="green-lighter" />
      <polygon points="154,162 116,159 155,218" className="green-light" />
      <polygon points="187,28 216,114 154,162" className="green-norm" />
      <polygon points="187,28 216,114 264,162 204,28" className="green-norm" />
      <polygon points="216,114 264,162 223,210" className="green-dark" />
      <polygon
        points="216,114 223,210 154,162"
        style={{
          fill: '#5c9433',
        }}
      />
      <polygon points="154,162 223,210 188,211" className="green-darker" />
      <polygon points="154,162 188,211 155,218" className="green-darker" />
      <polygon points="200,70 216,114 185,137" className="green-light" />
      <polygon
        points="216,114 220,167 185,137"
        style={{
          fill: '#588f32',
        }}
      />
      <polygon
        points="216,114 250,148 220,167"
        style={{
          fill: '#598d33',
        }}
      />
      <linearGradient id="trunkgrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop
          offset="0%"
          style={{
            stopColor: '#996d2e',
            stopOpacity: 1,
          }}
        />
        <stop
          offset="100%"
          style={{
            stopColor: '#d5bc79',
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <radialGradient id="shadow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop
          offset="0%"
          style={{
            stopColor: '#666',
            stopOpacity: 0.7,
          }}
        />
        <stop
          offset="100%"
          style={{
            stopColor: '#666',
            stopOpacity: 0,
          }}
        />
      </radialGradient>
    </svg>
  );
}
