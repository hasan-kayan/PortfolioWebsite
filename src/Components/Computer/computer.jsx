import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';

function Models() {
  const { scene } = useGLTF('../../../Public/mac-draco.glb');
  // Ensure materials are properly applied to the model
  return <primitive object={scene} />;
}

function Model() {
  return (
    <Canvas>
      <ambientLight intensity={2} /> {/* Adjust intensity as needed */}
      <pointLight position={[10, 10, 10]} /> {/* Add a point light */}
      <pointLight position={[0, 5, 0]} /> {/* Add a point light */}
      <Models />
      <OrbitControls />
    </Canvas>
  );
}

export default Model;
