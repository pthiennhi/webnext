/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/model/object/chick_trio.glb -o src/components/model/Objects/ChickTrio.tsx -t -k -T 
Files: public/model/object/chick_trio.glb [360.58KB] > chick_trio-transformed.glb [74.48KB] (79%)
Author: zephyrin (https://sketchfab.com/zephyrin)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/chick-trio-ea7e1245fbf543eaafd286586f6e6d73
Title: Chick Trio
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Body_Body_0: THREE.Mesh
  }
  materials: {
    PaletteMaterial001: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function ChickTrio(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/chick_trio-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh name="Body_Body_0" geometry={nodes.Body_Body_0.geometry} material={materials.PaletteMaterial001} position={[0, 0.678, 0]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/chick_trio-transformed.glb')
