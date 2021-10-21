import * as React from 'react';

import './SvgTrees.scss';

// SOURCE: https://codepen.io/lukeandrewreid/pen/LpWgmg

export function SvgTrees(props) {
  return (
    <svg className="trees" {...props}>
      <g className="tree" id="tree" transform="translate(400,30)">
        <polygon points="25,75 27,44 21,34 25,33 30,41 38,33 40,34 31,46 29,75" fill="#3f2145" />
        <polygon points="29,75 31,46 32,45 32,74" fill="#812743" />
        <polygon points="2,21 11,33 20,32 27,29 32,23 24,35 11,34" fill="#282246" />
        <polygon points="27,29 33,13 18,0 29,2 37,13 32,23" fill="#6a7749" />
        <polygon points="33,23 35,32 45,37 55,27 44,35 37,31" fill="#210f3f" />
        <polygon points="37,31 38,17 46,17 50,31" fill="#354346" />
        <polygon points="37,31 50,31 45,37" fill="#292941" />
        <polygon points="33,23 37,31 38,17" fill="#2b2d42" />
        <polygon points="38,17 46,17 46,11" fill="#495e4b" />
        <polygon points="46,17 46,11 54,18" fill="#5b7049" />
        <polygon points="44,11 54,18 56,26 50,31" fill="#515d49" />
        <polygon points="11,33 20,32 27,29 15,19" fill="#292e42" />
        <polygon points="27,29 33,13 15,19" fill="#424f46" />
        <polygon points="33,13 18,0 15,19" fill="#48604a" />
        <polygon points="18,0 7,5 15,19" fill="#3a5449" />
        <polygon points="7,5 0,18 15,19" fill="#344847" />
        <polygon points="0,18 11,33 15,19" fill="#292c4b" />
        <polygon
          points="175,4 121,10 53,12 12,16 5,20 47,22 122,12 180,4"
          fill="rgba(0,0,0,0.5)"
          transform="translate(-148,70)"
        />
      </g>
      <use x={-215} y={-23} xlinkHref="#tree" transform="scale(0.8)" />
      <use x={-220} y={-20} xlinkHref="#tree" />
      <use x={540} y={-30} xlinkHref="#tree" />
      <use x={480} y={-20} xlinkHref="#tree" />
      <use x={440} y={-15} xlinkHref="#tree" transform="scale(1.2)" />
    </svg>
  );
}
