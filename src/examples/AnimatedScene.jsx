import { useContext } from 'react';
import { ControlTranslate } from '../components/interactive/ControlTranslate';

import { ScrollableArea, ScrollableAreaContext } from '../components/interactive/ScrollableArea';
import { useGlobalMouseMove } from '../hooks/useGlobalMouseMove';
import './AnimatedScene.scss';

import { colors } from './sceneAssets/colors';
import { mountainPaths } from './sceneAssets/mountainPaths';
import { SvgCloud1 } from './sceneAssets/SvgCloud1';
import { SvgCloud2 } from './sceneAssets/SvgCloud2';
import { SvgForest } from './sceneAssets/SvgForest';
import { SvgMountain } from './sceneAssets/SvgMountain';
import { SvgTree } from './sceneAssets/SvgTree';
import { SvgTrees } from './sceneAssets/SvgTrees';

import imgPicnicTable from './sceneAssets/img-picnic-table.png';
import imgBackpack2 from './sceneAssets/img-backpack-2.png';
import imgBackpack3 from './sceneAssets/img-backpack-3.png';
import imgCampfire from './sceneAssets/img-campfire.png';
import { ControlSkew } from '../components/interactive/ControlSkew';

const OFFSET = 0.37;

export const AnimatedScene = () => {
  return (
    <div className="animated-scene animated-scene--container">
      <ScrollableArea id="sky-and-mountains">
        <Sky />
        <Clouds1 />
        <Mountains />
        <Clouds2 />
      </ScrollableArea>
      <ScrollableArea id="treeline" className="animated-scene--container-2-offset">
        <ControlTranslate mouseOffsetX={-50} mouseOffsetY={50}>
          <div className="animated-scene--container-2">
            <TreeLine />
            <Foreground />
          </div>
        </ControlTranslate>
      </ScrollableArea>
    </div>
  );
};

const Sky = () => {
  return (
    <div>
      <ControlTranslate scrollFromY={0} scrollToY={1500} mouseOffsetX={25} mouseOffsetY={-25}>
        <div className="moon-circle" />
      </ControlTranslate>
      <h2 className="animated-scene--title">OUTDOOR EXPLORER</h2>
    </div>
  );
};

const Mountains = () => {
  const [mouseX, mouseY] = useGlobalMouseMove();
  const pctProgress = useContext(ScrollableAreaContext) || 0;

  let lastMountainColor = 'rgba(0,0,0,0)';
  let lastTransformY = 0;

  return (
    <div className="mountain-section">
      <div className="svg-mountain-offset" />
      {mountainPaths.map((mountain, index) => {
        const color1 = index < colors.blue.length - 1 ? colors.blue[index + 1] : colors.blue[colors.blue.length - 1];
        const color2 = index < colors.blue.length - 1 ? colors.blue[index] : colors.blue[colors.blue.length - 2];
        const color3 = colors.blue[index - 1];
        const transformY = pctProgress * mountain.speed * 1600;
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
            transformY={transformY + mouseY * (1 - mountain.speed) * 50}
            transformX={-mouseX * (1 - mountain.speed) * 50}
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

const Clouds1 = () => {
  return (
    <div className="position-absolute" style={{ top: 0, left: 0, width: '100%' }}>
      <ControlTranslate scrollFromY={0} scrollToY={1000} mouseOffsetY={10} mouseOffsetX={-10}>
        <SvgCloud2 className="position-absolute" style={{ top: 180, left: '40vw', opacity: 0.7 }} />
      </ControlTranslate>
      <ControlTranslate scrollFromY={0} scrollToY={1100} mouseOffsetY={5} mouseOffsetX={-5}>
        <SvgCloud1 className="position-absolute" style={{ top: 240, right: '30vw', opacity: 0.7 }} />
      </ControlTranslate>
    </div>
  );
};

const Clouds2 = () => {
  return (
    <div className="position-absolute" style={{ top: 0, left: 0, width: '100%' }}>
      <ControlTranslate scrollFromY={0} scrollToY={400} mouseOffsetY={40} mouseOffsetX={-40}>
        <SvgCloud1 className="position-absolute" style={{ top: 300, left: '20vw', opacity: 0.7 }} />
      </ControlTranslate>
      <ControlTranslate scrollFromY={0} scrollToY={300} mouseOffsetY={40} mouseOffsetX={-40}>
        <SvgCloud1 className="position-absolute" style={{ top: 500, right: '0vw', opacity: 0.7 }} />
      </ControlTranslate>
    </div>
  );
};

const TreeLine = () => {
  return (
    <div className="treeline position-relative">
      <div>
        <SvgForest style={{ marginTop: '-40vh' }} />
        <SvgForest style={{ marginTop: '-40vh', transform: 'rotateY(180deg)' }} />
      </div>
      <div className="position-relative" style={{ marginTop: -100 }}>
        <div>
          <ControlTranslate scrollFromY={0} scrollToY={-50 * OFFSET} mouseOffsetX={0} mouseOffsetY={0}>
            <SvgTree size={200 * 0.5} style={{ margin: randoMarg() }} />
            <SvgTree size={190 * 0.5} style={{ margin: randoMarg() }} />
            <SvgTree size={210 * 0.5} style={{ margin: randoMarg() }} />
            <SvgTree size={205 * 0.5} style={{ margin: randoMarg() }} />
            <SvgTree size={200 * 0.5} style={{ margin: randoMarg() }} />
            <SvgTree size={190 * 0.5} style={{ margin: randoMarg() }} />
            <SvgTree size={210 * 0.5} style={{ margin: randoMarg() }} />
            <SvgTree size={205 * 0.5} style={{ margin: randoMarg() }} />
          </ControlTranslate>
        </div>
        <div
          // className="position-absolute"
          style={{ width: '100%' }}
        >
          <ControlTranslate scrollFromY={0} scrollToY={-275 * OFFSET} mouseOffsetX={-20} mouseOffsetY={20}>
            <SvgTree size={200 * 0.63} style={{ margin: randoMarg() }} />
            <SvgTree size={190 * 0.63} style={{ margin: randoMarg() }} />
            <SvgTree size={210 * 0.63} style={{ margin: randoMarg() }} />
            <SvgTree size={205 * 0.63} style={{ margin: randoMarg() }} />
            <SvgTree size={200 * 0.63} style={{ margin: randoMarg() }} />
            <SvgTree size={190 * 0.63} style={{ margin: randoMarg() }} />
            <SvgTree size={210 * 0.63} style={{ margin: randoMarg() }} />
            <SvgTree size={205 * 0.63} style={{ margin: randoMarg() }} />
          </ControlTranslate>
        </div>
        <div style={{ width: '100%' }}>
          <ControlTranslate scrollFromY={0} scrollToY={-500 * OFFSET} mouseOffsetX={-40} mouseOffsetY={40}>
            <SvgTree size={200 * 0.8} style={{ margin: randoMarg() }} />
            <SvgTree size={190 * 0.8} style={{ margin: randoMarg() }} />
            <SvgTree size={210 * 0.8} style={{ margin: randoMarg() }} />
            <SvgTree size={205 * 0.8} style={{ margin: randoMarg() }} />
            <SvgTree size={200 * 0.8} style={{ margin: randoMarg() }} />
            <SvgTree size={190 * 0.8} style={{ margin: randoMarg() }} />
            <SvgTree size={210 * 0.8} style={{ margin: randoMarg() }} />
            <SvgTree size={205 * 0.8} style={{ margin: randoMarg() }} />
          </ControlTranslate>
        </div>
      </div>
      <ControlTranslate scrollFromY={0} scrollToY={-800 * OFFSET} mouseOffsetX={-60} mouseOffsetY={60}>
        <SvgTrees style={{ transform: 'scale(2)' }} />
      </ControlTranslate>
    </div>
  );
};

const Foreground = () => {
  return (
    <div>
      <ControlTranslate scrollFromY={0} scrollToY={-900 * OFFSET} mouseOffsetX={-60} mouseOffsetY={60}>
        <div className="position-relative d-flex justify-content-start">
          <img
            src={imgCampfire}
            className="position-absolute"
            style={{ width: 250, height: 'auto', top: -50, left: 175 }}
            alt="Campfire"
          />
        </div>
      </ControlTranslate>
      <ControlTranslate scrollFromY={0} scrollToY={-1000 * OFFSET} mouseOffsetX={-100} mouseOffsetY={100}>
        <div className="position-relative d-flex justify-content-center">
          <ControlSkew from={0} to={40}>
            <img src={imgPicnicTable} alt="Picnic table" />
          </ControlSkew>
          <ControlTranslate
            scrollFromY={0}
            scrollToY={40}
            mouseOffsetX={-5}
            mouseOffsetY={5}
            className="position-absolute d-flex justify-content-center"
          >
            <img
              src={imgBackpack2}
              className="position-absolute"
              style={{ width: 250, height: 'auto', top: 20, marginLeft: -85 }}
              alt="Backpack"
            />
          </ControlTranslate>
          <ControlTranslate
            scrollFromY={0}
            scrollToY={15}
            mouseOffsetX={-5}
            mouseOffsetY={5}
            className="position-absolute d-flex justify-content-center"
          >
            <img
              src={imgBackpack3}
              className="position-absolute"
              style={{ width: 287, height: 'auto', top: 40, marginRight: -85 }}
              alt="Backpack Alternate"
            />
          </ControlTranslate>
        </div>
      </ControlTranslate>
      <ControlTranslate
        mouseOffsetX={50}
        mouseOffsetY={-50}
        className="position-relative d-flex justify-content-center"
      >
        <h2 className="animated-scene--bottom-title" style={{ marginTop: -400 }}>
          GO PLAY OUTSIDE
        </h2>
      </ControlTranslate>
    </div>
  );
};

const randoMarg = () => {
  const offsetX = 60;
  const offsetY = 30;
  const x = Math.floor(Math.random() * (offsetX + 1)) - offsetX;
  const y = Math.floor(Math.random() * (offsetY + 1)) - offsetY;
  return `${y}px ${x}px 0 0`;
};
