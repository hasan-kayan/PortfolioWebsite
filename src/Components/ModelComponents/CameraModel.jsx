import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useLoader, useFrame } from "@react-three/fiber";

function Camera() {
    const modelRef = useRef();
    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.01; // Slow rotation
        }
    }); 
    const materials = useLoader(MTLLoader, "/models/camera/S_305_MT.mtl");
    const obj = useLoader(OBJLoader, "/models/camera/S_305_MT.obj", (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });

    return <primitive ref={modelRef} object={obj} scale={1.5} />;
}

export default function CameraScene() {
    return (
        <Canvas camera={{ position: [0, 45, 45] }}>
            <ambientLight intensity={4} />
            <directionalLight position={[5, 5, 5]} intensity={2} />
            <Suspense fallback={null}>
                <Camera />
            </Suspense>
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
}
