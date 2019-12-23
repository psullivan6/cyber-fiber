 import React, { useRef } from 'react';
import { extend, useFrame, useThree } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls });

const Controls = props => {
  const { camera, gl } = useThree()
  const controls = useRef();
  useFrame(state => controls.current.update());

  return <orbitControls ref={controls} args={[camera, gl.domElement]} {...props} />
};

export default Controls;
