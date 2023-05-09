import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`;

const Test3D = () => {
  return (
    <Container>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={4}/>
        <ambientLight intensity={1}/>
        <directionalLight position={[4,2,1]}/>
        <mesh>
          <sphereGeometry args={[2]} />
          <meshStandardMaterial color={'#1f1f22'}/>
        </mesh>
      </Canvas>
    </Container>
  );
};

export default Test3D;
