import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader,useFrame } from "@react-three/fiber";

function ESP32() {
    const modelRef = useRef();
useFrame(() => {
    if (modelRef.current) {
        modelRef.current.rotation.y += 0.01; // Slow rotation
    }
}); 
    const gltf = useLoader(GLTFLoader, "/models/esp32.glb");
    return <primitive ref={modelRef} object={gltf.scene} scale={1.5} />;
}

export default function ESP32Scene() {
    return (
        <Canvas camera={{ position: [0, 50, 50] }}>
            <ambientLight intensity={4} />
            <directionalLight position={[5, 5, 5]} intensity={2} />
            <spotLight position={[15, 15, 15]} angle={0.15} penumbra={1} intensity={2} />
            <Suspense fallback={null}>
                <ESP32 />
            </Suspense>
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
}
