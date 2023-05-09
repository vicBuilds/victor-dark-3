import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Hand from './Models/Hand'

const IIlustration = () => {
  return (
    <div style={{width:'100%', height:'100%'}}>
        <Canvas>
          <OrbitControls autoRotate={true}/>
          <Stage environment={'city'} intensity={0.9}>
          <Hand/>
          </Stage>
          
        </Canvas>
      </div>
  )
}

export default IIlustration