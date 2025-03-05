import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useFrame } from "@react-three/fiber";

function Laptop() {
    const gltf = useLoader(GLTFLoader, "/models/laptop.glb");
    const laptopRef = useRef();

    useFrame(() => {
        if (laptopRef.current) {
            laptopRef.current.rotation.y += 0.01; // Slow rotation
        }
    });

    return <primitive ref={laptopRef} object={gltf.scene} scale={1.5} />;
}

export default function LaptopScene() {
    return (
        <Canvas camera={{ position: [0, 5, 10] }}>
            <ambientLight intensity={2} />
            <directionalLight position={[5, 5, 5]} intensity={2} />
            <Suspense fallback={null}>
                <Laptop />
            </Suspense>
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
}