/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/model/object/goku.glb -o src/components/model/Objects/Goku.tsx -t -k -T 
Files: public/model/object/goku.glb [309.68KB] > goku-transformed.glb [127.66KB] (59%)
Author: Kari (https://sketchfab.com/keetos349)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/goku-rigged-animated-3ed060df9f4a4134963e61f3ca95ee7d
Title: Goku (Rigged & Animated)
*/

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_7: THREE.SkinnedMesh
    Object_8: THREE.SkinnedMesh
    Object_10: THREE.SkinnedMesh
    Object_12: THREE.SkinnedMesh
    Object_13: THREE.SkinnedMesh
    Object_15: THREE.SkinnedMesh
    Object_16: THREE.SkinnedMesh
    Object_18: THREE.SkinnedMesh
    _rootJoint: THREE.Bone
  }
  materials: {
    ['tex1.png']: THREE.MeshStandardMaterial
    ['tex2.png']: THREE.MeshStandardMaterial
    ['tex4.png']: THREE.MeshStandardMaterial
    ['tex3.png']: THREE.MeshStandardMaterial
    ['face1.png']: THREE.MeshStandardMaterial
  }
}

type ActionName = 'Idle'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['skinnedMesh'] | JSX.IntrinsicElements['bone']>>

export function Goku(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/goku-transformed.glb') as GLTFResult
  const { actions } = useAnimations<any>(animations, group)
  useEffect(()=>{
    actions?.["Idle"]?.play()
  },[actions])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials['tex1.png']} skeleton={nodes.Object_7.skeleton} scale={0.001} />
        <skinnedMesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials['tex2.png']} skeleton={nodes.Object_8.skeleton} scale={0.001} />
        <skinnedMesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials['tex4.png']} skeleton={nodes.Object_10.skeleton} scale={0.001} />
        <skinnedMesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials['tex1.png']} skeleton={nodes.Object_12.skeleton} scale={0.001} />
        <skinnedMesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials['tex2.png']} skeleton={nodes.Object_13.skeleton} scale={0.001} />
        <skinnedMesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials['tex3.png']} skeleton={nodes.Object_15.skeleton} scale={0.001} />
        <skinnedMesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials['tex4.png']} skeleton={nodes.Object_16.skeleton} scale={0.001} />
        <skinnedMesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials['face1.png']} skeleton={nodes.Object_18.skeleton} scale={0.001} />
      </group>
    </group>
  )
}

useGLTF.preload('/goku-transformed.glb')
