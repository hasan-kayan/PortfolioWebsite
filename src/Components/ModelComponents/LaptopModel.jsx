import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

// Load the Laptop model
function Laptop() {
    const gltf = useLoader(GLTFLoader, "/models/laptop.glb");
    return <primitive object={gltf.scene} scale={1.5} />;
}

// Load individual stack models and animate them in orbit
function StackModel({ url, radius, speed, yOffset, scale, rotation }) {
    const gltf = useLoader(GLTFLoader, url);
    const ref = useRef();

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        ref.current.position.x = Math.cos(elapsedTime * speed) * radius;
        ref.current.position.z = Math.sin(elapsedTime * speed) * radius;
    });

    // Apply Rotation if needed
    if (rotation) {
        gltf.scene.rotation.set(rotation[0], rotation[1], rotation[2]);
    }

    return <primitive ref={ref} object={gltf.scene} scale={scale} position={[radius, yOffset, 0]} />;
}

export default function LaptopScene() {
    const stacks = [
        { url: "/models/stacks/cloud.glb", radius: 5, scale: 0.5, speed: 0.5, yOffset: -1 },
        { url: "/models/stacks/gopher.glb", radius: 6, scale: 0.5, speed: 0.3, yOffset: 1 },
        { url: "/models/stacks/javascript.glb", radius: 5, scale: 0.1, speed: 0.4, yOffset: 2, rotation: [0, Math.PI / 2, Math.PI / 2] }, // Rotated 90 degrees
        { url: "/models/stacks/linux-char.glb", radius: 5, scale: 2, speed: 0.6, yOffset: 1.5 },
        { url: "/models/stacks/python.glb", radius: 5, scale: 0.05, speed: 0.45, yOffset: 1.8 },
        { url: "/models/stacks/react_logo.glb", radius: 5, scale: 0.8, speed: 0.35, yOffset: 1.5 },
    ];

    return (
        <Canvas camera={{ position: [0, 5, 10] }}>
            <ambientLight intensity={2} />
            <directionalLight position={[5, 5, 5]} intensity={2} />
            <Suspense fallback={null}>
                <Laptop />
                {stacks.map((stack, index) => (
                    <StackModel key={index} {...stack} />
                ))}
            </Suspense>
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
}
