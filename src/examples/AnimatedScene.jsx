import { useEffect, useState } from 'react';
import { ControlTranslate } from '../components/interactive/ControlTranslate';
import { ScrollableArea } from '../components/interactive/ScrollableArea';
import { useGlobalMouseMove } from '../hooks/useGlobalMouseMove';
import { useOnScroll } from '../hooks/useOnScroll';
import { Maths } from '../utils/Maths';
import './AnimatedScene.scss';

import { colors } from './sceneAssets/colors';
import { mountainPaths } from './sceneAssets/mountainPaths';
import { SvgCloud1 } from './sceneAssets/SvgCloud1';
import { SvgCloud2 } from './sceneAssets/SvgCloud2';
// import { SvgForest } from './sceneAssets/SvgForest';
import { SvgMountain } from './sceneAssets/SvgMountain';
import { SvgTree } from './sceneAssets/SvgTree';
import { SvgTrees } from './sceneAssets/SvgTrees';

const WIDTH = 1440;
const HEIGHT = 800;

export const AnimatedScene = () => {
  useEffect(() => {
    // snowfall();
  });

  return (
    <div className="animated-scene animated-scene--container">
      <ScrollableArea id="sky-and-mountains" debug>
        <Sky />
        <Mountains />
      </ScrollableArea>
      <ScrollableArea id="treeline" className="animated-scene--container-2">
        <TreeLine />
      </ScrollableArea>
      <div
        id="fireflies-canvas"
        className="fireflies-canvas position-absolute fill-absolute z-index-20"
        width={WIDTH}
        height={HEIGHT}
      />
    </div>
  );
};

const Sky = () => {
  // const [scrollY, setScrollY] = useState(0);
  // const [winHeight, setWinHeight] = useState(0);

  // useOnScroll((_scrollY, _winHeight) => {
  //   setScrollY(_scrollY);
  //   setWinHeight(_winHeight);
  // });

  // TODO: ABSTRACT TO A UTIL
  // function calcScrollTransform({ scrollY = 0, winHeight, speed = 10 } = {}) {
  //   const y = scrollY - winHeight;
  //   if (y < 0) return 0;

  //   const transform = y * speed * 0.01;
  //   return Maths.clampVal(transform, -winHeight, winHeight);
  // }

  return (
    <div>
      {/* <div
        className="moon-circle"
        style={{
          transform: `translate(${0}px, ${calcScrollTransform({
            scrollY,
            winHeight,
            speed: 120,
          })}px)`,
        }}
      /> */}

      <ControlTranslate scrollFromY={0} scrollToY={500}>
        <div className="moon-circle" />
      </ControlTranslate>
      <h2 className="animated-scene--title">OUTDOOR EXPLORER</h2>
    </div>
  );
};

const Mountains = () => {
  const [scrollY, setScrollY] = useState(0);
  const [winHeight, setWinHeight] = useState(0);
  const [mouseX, mouseY] = useGlobalMouseMove();
  let lastMountainColor = 'rgba(0,0,0,0)';
  let lastTransformY = 0;

  useOnScroll((_scrollY, _winHeight) => {
    setScrollY(_scrollY);
    setWinHeight(_winHeight);
  });

  return (
    <div>
      <div className="svg-mountain-offset" />
      {mountainPaths.map((mountain, index) => {
        const color1 = index < colors.blue.length - 1 ? colors.blue[index + 1] : colors.blue[colors.blue.length - 1];
        const color2 = index < colors.blue.length - 1 ? colors.blue[index] : colors.blue[colors.blue.length - 2];
        const color3 = colors.blue[index - 1];
        // const color3 = index === mountainPaths.length - 1 ? 'rgba(0,0,0,0)' : colors.blue[index - 1];
        const transformY = calcMountainScrollTransform(scrollY, winHeight, mountain.distance);
        lastMountainColor = color3;
        lastTransformY = transformY;
        return (
          <SvgMountain
            key={mountain.id}
            id={mountain.id}
            path={mountain.path}
            height={mountain.height}
            color1={color1}
            color2={color2}
            color3={color3}
            transformY={transformY + calcMountainMouseTransform(mouseY, mountain.distance)}
            transformX={-calcMountainMouseTransform(mouseX, mountain.distance)}
          />
        );
      })}
      <div
        className="svg-last-mountain-offset"
        style={{
          background: `linear-gradient(180deg, ${lastMountainColor} 0%, ${'#51dad1'} 100%)`,
          transform: `translate(0, ${lastTransformY}px) scale(1.1)`,
        }}
      />
    </div>
  );
};

function calcMountainScrollTransform(scrollY = 0, winHeight = 0, distance = 0) {
  if (distance <= 0) return 0;

  const y = scrollY - winHeight;

  if (y < 0) return 0;

  const transform = y * (distance / 30000);

  return Maths.clampVal(transform, 0, winHeight * (distance / 30000));
}

function calcMountainMouseTransform(mouse = 0, distance = 0) {
  if (distance <= 0) return 0;

  return (mouse * 100000) / distance;
}

const TreeLine = () => {
  return (
    <div>
      {/* <div>
        <SvgForest style={{ marginTop: '-30vh' }} />
        <SvgForest style={{ marginTop: '-30vh', transform: 'rotateY(180deg)' }} />
      </div> */}
      <SvgTree size={200} />
      <SvgTree size={190} />
      <SvgTree size={210} />
      <SvgTree size={205} />
      <SvgTrees />
      <SvgCloud1 />
      <SvgCloud2 />
    </div>
  );
};
