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

const Scene = ({ children }) => (
  <CanvasWrapper>
    <Canvas
      pixelRatio={typeof window === 'undefined' ? 2 : window.devicePixelRatio}
      onCreated={() => console.log('CANVAS IS READY')}
      // orthographic={true}
    >
      <Lights />
      <Controls />
      {children}
    </Canvas>
  </CanvasWrapper>
);

export default Scene;
