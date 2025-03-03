import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

function Laptop() {
    const gltf = useLoader(GLTFLoader, "/models/Laptop/Models/laptop.glb");
    return <primitive object={gltf.scene} scale={1.5} />;
}

export default function LaptopScene() {
    return (
        <Canvas camera={{ position: [0, 5, 10] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <Suspense fallback={null}>
                <Laptop />
            </Suspense>
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
}
