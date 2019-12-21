import { useEffect } from 'react';
import { useThree } from 'react-three-fiber';
import * as THREE from 'three';

function useGLDebugger() {
  const { scene, camera } = useThree();

  useEffect(() => {
    window.THREE = THREE;
    window.scene = scene;
    window.camera = camera;
  }, [camera, scene]);
}

export default useGLDebugger;
