import React from 'react';
import { Canvas } from 'react-three-fiber';
import styled from 'styled-components';

// Components
import Lights from '../GL/Lights';
import Controls from '../GL/Controls';


const CanvasWrapper = styled.div`
  width: 100%;
  height: 500px;
`;

const Scene = ({ children }) => {
  console.log('Scene Component CALLED');

  return (
    <CanvasWrapper>
      <Canvas
        pixelRatio={typeof window === 'undefined' ? 2 : window.devicePixelRatio}}
        camera={{ fov: 90, position: [0, 0, 550], near: 0.1, far: 200000, zoom: 200 }}
        orthographic={false}
      >
        <Lights/>
        <Controls />
        <axesHelper args={5} />
        {children}
      </Canvas>
    </CanvasWrapper>
  );
}

export default Scene;
