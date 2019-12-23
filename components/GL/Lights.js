import React, { useState } from 'react';
import { useResource } from 'react-three-fiber';

function Lights() {
  const [ref, light] = useResource()

  return (
    <group>
      {/* <pointLight intensity={0.3} /> */}
      {/* <ambientLight intensity={2} /> */}
      <spotLight
        ref={ref}
        intensity={10}
        angle={Math.PI / 30}
        position={[8, 8, 5]}
        penumbra={0.9}
        color="#ffff00"
        distance={15}
        decay={2}
      />
      {light && <spotLightHelper args={[light, 0xff00ff]} />}
    </group>
  )
}

export default Lights;
