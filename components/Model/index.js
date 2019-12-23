import * as THREE from 'three'
import React, { Suspense, useRef } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import ErrorBoundary from '../ErrorBoundary';
import useGLDebugger from '../../utilities/hooks/useGLDebugger';

const Model = (props) => {
  useGLDebugger();
  const group = useRef()
  const gltf = useLoader(GLTFLoader, '/cyber-truck.gltf')

  return (
    <group ref={group} {...props} rotation={[0, 0, 0]}> // Math.PI / -2
      <mesh name="Smashes" >
          <bufferGeometry attach="geometry" {...gltf.__$[2].geometry} />
          <meshPhongMaterial attach="material" {...gltf.__$[2].material} name="glass_crack" />
        </mesh>
        <mesh name="passenger-rear" >
          <bufferGeometry attach="geometry" {...gltf.__$[3].geometry} />
          <meshPhongMaterial attach="material" {...gltf.__$[3].material} name="rubber" />
        </mesh>
        <mesh name="driver-front" >
          <bufferGeometry attach="geometry" {...gltf.__$[4].geometry} />
          <meshPhongMaterial attach="material" {...gltf.__$[4].material} name="rubber" />
        </mesh>
        <mesh name="passenger-front" >
          <bufferGeometry attach="geometry" {...gltf.__$[5].geometry} />
          <meshPhongMaterial attach="material" {...gltf.__$[5].material} name="rubber" />
        </mesh>
        <mesh name="driver-rear" >
          <bufferGeometry attach="geometry" {...gltf.__$[6].geometry} />
          <meshPhongMaterial attach="material" {...gltf.__$[6].material} name="rubber" />
        </mesh>
        <mesh name="steer_gray_0" >
          <bufferGeometry attach="geometry" {...gltf.__$[7].geometry} />
          <meshPhongMaterial attach="material" {...gltf.__$[7].material} name="gray" />
        </mesh>
        <mesh name="body_gray_0" >
          <bufferGeometry attach="geometry" {...gltf.__$[8].geometry} />
          <meshPhongMaterial attach="material" {...gltf.__$[8].material} name="gray" />
        </mesh>
        <mesh name="body_light_f_0" >
          <bufferGeometry attach="geometry" {...gltf.__$[9].geometry} />
          <meshPhongMaterial attach="material" {...gltf.__$[9].material} name="light_f" />
        </mesh>
        <mesh name="body_glass_0" >
          <bufferGeometry attach="geometry" {...gltf.__$[10].geometry} />
          <meshPhongMaterial attach="material" {...gltf.__$[10].material} name="glass" />
        </mesh>
        <mesh name="body_glassgray_0" >
          <bufferGeometry attach="geometry" {...gltf.__$[11].geometry} />
          <meshPhongMaterial attach="material" {...gltf.__$[11].material} name="glassgray" />
        </mesh>
        <mesh name="body_body_0" >
          <bufferGeometry attach="geometry" {...gltf.__$[12].geometry} />
          <meshPhongMaterial attach="material" {...gltf.__$[12].material} name="body" />
        </mesh>
    </group>
  )
}

const WrappedModel = () => (
  <ErrorBoundary>
    <Suspense fallback={null}>
      <Model />
    </Suspense>
  </ErrorBoundary>
);

export default WrappedModel;
