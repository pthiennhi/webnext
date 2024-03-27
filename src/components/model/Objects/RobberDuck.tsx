/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/model/object/robber-duck.glb -o src/components/model/Objects/RobberDuck.tsx -t -k -T 
Files: public/model/object/robber-duck.glb [7.58MB] > robber-duck-transformed.glb [405.46KB] (95%)
Author: cvbtruong (https://sketchfab.com/cvbtruong)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/robber-cartoon-character-3d-model-82732a16bc014257a2fb99dcdaf3773d
Title: Robber- cartoon character 3d model
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
  }
  materials: {
    defaultMat: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function RobberDuck(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/robber-duck-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh name="Object_2" geometry={nodes.Object_2.geometry} material={materials.defaultMat} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/robber-duck-transformed.glb')
