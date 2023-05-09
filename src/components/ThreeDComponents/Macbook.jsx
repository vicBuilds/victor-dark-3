/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 macbook.gltf --transform
Author: KangaroOz 3D (https://sketchfab.com/KangaroOz-3D)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/macbook-pro-2021-37763335f74b497e91906986b170b5d1
Title: MacBook Pro 2021
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/macbook-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.12, 0.01, 0]}>
        <mesh geometry={nodes.Object_6.geometry} material={materials.MacBookPro} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.MacBookPro} />
      </group>
      <mesh geometry={nodes.Object_4.geometry} material={materials.MacBookPro} />
    </group>
  )
}

useGLTF.preload('/macbook-transformed.glb')