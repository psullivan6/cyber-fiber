import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
  
export default function Model(props) {
  const group = useRef()
  const gltf = useLoader(GLTFLoader, '/cyber-truck.gltf')

  return (
    <group ref={group} {...props}>
      <scene name="Scene" >
        <object3D name="Light" position={[4.076245307922363, 5.903861999511719, -1.0054539442062378,]} rotation={[1.8901259643076738, 0.8805683470227423, -2.045215994363619,]} />
        <mesh name="Smashes" >
          <bufferGeometry attach="geometry" {...gltf.__$[2].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[2].material} name="glass_crack" />
        </mesh>
        <mesh name="wheels" >
          <bufferGeometry attach="geometry" {...gltf.__$[3].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[3].material} name="rubber" />
        </mesh>
        <mesh name="steer_gray_0" >
          <bufferGeometry attach="geometry" {...gltf.__$[4].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[4].material} name="gray" />
        </mesh>
        <mesh name="body_gray_0" >
          <bufferGeometry attach="geometry" {...gltf.__$[5].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[5].material} name="gray" />
        </mesh>
        <mesh name="body_light_f_0" >
          <bufferGeometry attach="geometry" {...gltf.__$[6].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[6].material} name="light_f" />
        </mesh>
        <mesh name="body_glass_0" >
          <bufferGeometry attach="geometry" {...gltf.__$[7].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[7].material} name="glass" />
        </mesh>
        <mesh name="body_glassgray_0" >
          <bufferGeometry attach="geometry" {...gltf.__$[8].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[8].material} name="glassgray" />
        </mesh>
        <mesh name="body_body_0" >
          <bufferGeometry attach="geometry" {...gltf.__$[9].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[9].material} name="body" />
        </mesh>
      </scene>
    </group>
  )
}