import { useLoader } from "@react-three/fiber";
import React, { useMemo } from "react";

import * as THREE from 'three';
type Props = {};
export function Ground(
  props: JSX.IntrinsicElements["group"] & { lightStatus?: boolean },
) {
    const texture = useLoader(THREE.TextureLoader, '/env/texture/grass.jpg');


    // Set texture wrapping to RepeatWrapping
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    
    // Set texture repeat
    texture.repeat.set(150, 150); // Adjust the values based on how many times you want the texture to repeat
  
    // Create a memoized material to prevent unnecessary re-renders
    const material = useMemo(() => {
      return new THREE.MeshPhongMaterial({ map: texture });
    }, [texture]);
  
  return (
    <group {...props} dispose={null}>
      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeGeometry args={[500, 500, 1, 1]} />
        {/* <meshPhongMaterial color={"red"}  opacity={1} side={0} /> */}
        <primitive object={material} />
      </mesh>
    </group>
  );
}
export default Ground;
