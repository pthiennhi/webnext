/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/model/object/robber.glb -o src/components/model/Objects/Robber.tsx -t -k -T 
Files: public/model/object/robber.glb [372.11KB] > robber-transformed.glb [78.53KB] (79%)
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Circle: THREE.Mesh
    Cylinder001: THREE.Mesh
  }
  materials: {
    ['Material.006']: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Robber(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/robber-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh name="Circle" geometry={nodes.Circle.geometry} material={materials['Material.006']} position={[-0.251, 3.333, 1.598]} rotation={[1.583, 0, 0]} scale={0.116} />
      <mesh name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={materials['Material.005']} position={[-0.247, 1.181, 1.064]} />
    </group>
  )
}

useGLTF.preload('/robber-transformed.glb')
