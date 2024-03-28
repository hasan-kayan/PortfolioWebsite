import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';

function Models() {
  const { scene } = useGLTF('../../../Public/mac-draco.glb');
  return <primitive object={scene} />;
}

function Model() {
  return (
    <Canvas>
      <ambientLight />
      <Models />
      <OrbitControls />
    </Canvas>
  );
}

export default Model;
