import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Helmet from './Models/Helmet'

const WebDesign = () => {
  return (
    <div style={{width:'100%', height:'80%'}}>
      <Canvas style={{cursor:'pointer'}}>
          <OrbitControls autoRotate={true}/>
          <Stage environment={'city'} intensity={0.9}>
          <Helmet/>
          </Stage>
        </Canvas>
    </div>
  )
}

export default WebDesign
