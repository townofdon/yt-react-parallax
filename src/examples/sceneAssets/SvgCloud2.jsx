import * as React from 'react';

import './SvgTree.scss';

// SOURCE: https://codepen.io/lukeandrewreid/pen/BNJddO

export function SvgCloud2(props) {
  return (
    <svg height="300px" width="400px" id="cloud2" {...props}>
      <polygon points="282,137 347,148 354,168 284,184 260,170 250,148" fill="white" />
      <polygon points="354,168 284,184 260,170 250,148" fill="#f1f1f1" />
      <polygon points="354,168 284,184 320,162" fill="#eaeaea" />
    </svg>
  );
}
