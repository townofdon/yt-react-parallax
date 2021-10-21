import * as React from 'react';

import './SvgTree.scss';

// SOURCE: https://codepen.io/lukeandrewreid/pen/BNJddO

export function SvgCloud1(props) {
  return (
    <svg height="300px" width="400px" className="svg-cloud1" {...props}>
      <polygon points="72,47 117,48 134,68 124,74 82,74 50,68" fill="white" />
      <polygon points="92,60 134,68 124,74 82,74 50,68" fill="#f2f2f2" />
    </svg>
  );
}
