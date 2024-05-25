import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

function Models() {
  const { scene } = useGLTF("../../../Public/mac-draco.glb");
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.008; // Adjust rotation speed as needed
    }
  });

  return <primitive ref={modelRef} object={scene} />;
}

function Model() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-silver">
      <Canvas style={{ width: "100%", height: "100vh" }}>
        <ambientLight intensity={2} /> {/* Adjust intensity as needed */}
        <pointLight position={[10, 10, 10]} /> {/* Add a point light */}
        <pointLight position={[0, 5, 0]} /> {/* Add a point light */}
        <Models />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Model;
