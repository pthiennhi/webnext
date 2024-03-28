import { PerspectiveCamera } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react'
import { Vector3 } from 'three';

type Props = {
    housePosition: Vector3
}

const Camera = (props: Props) => {
    const customCamera = useRef();

  // Access the three.js camera from the useThree hook
  const { camera: defaultCamera } = useThree();
  useEffect(() => {
    // Set the position of the camera
    // camera.rotation.set(0, Math.PI/2,1)
    // camera.position.set(-10, -50, -10);
    // Set the desired position (x, y, z)
    // camera.lookAt(new Vector3(-1, -70, -3))
  }, [customCamera]);
  return (
    <PerspectiveCamera ref={customCamera} fov={75} position={[5, 5, 5]} />
  )
}

export default Camera