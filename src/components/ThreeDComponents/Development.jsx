import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Robot from './Models/Robot'

const Development = () => {
  return (
      <div style={{width:'100%', height:'100%'}}>
        <Canvas>
          <OrbitControls autoRotate={true}/>
          <Stage environment={'city'} intensity={0.9}>
          <Robot/>
          </Stage>
          
        </Canvas>
      </div>
   
  )
}

export default Development