import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useLoader } from "@react-three/fiber";

function Camera() {
    const materials = useLoader(MTLLoader, "/models/camera/S_305_MT.mtl");
    const obj = useLoader(OBJLoader, "/models/camera/S_305_MT.obj", (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });

    return <primitive object={obj} scale={1.5} />;
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
