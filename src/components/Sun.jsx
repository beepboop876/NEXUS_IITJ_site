import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

export default function Sun({ texture }) {
    const sunRef = useRef();
    const lightRef = useRef();
    const map = useLoader(THREE.TextureLoader, texture);

    useFrame(({ camera }) => {
        if (!sunRef.current) return;

        const zDistance = camera.position.z - sunRef.current.position.z - 70;

        // Slow solar rotation
        sunRef.current.rotation.y += 0.0004;

        // Scale: big → small
        const scale = THREE.MathUtils.clamp(
            1 - zDistance / 50,
            0,
            1
        );

        sunRef.current.scale.setScalar(scale);

        // Fade sun
        if (sunRef.current.material) {
            sunRef.current.material.transparent = true;
            sunRef.current.material.opacity = scale;
        } 

        // Light fades
        if (lightRef.current) {
            lightRef.current.intensity = THREE.MathUtils.clamp(
                6 - zDistance / 25,
                0.5,
                6
            );
        }
    });


    return (
        <>
            {/* Sun mesh */}
            <mesh ref={sunRef} position={[10, 0, -60]}>
                <sphereGeometry args={[6, 64, 64]} />
                <meshBasicMaterial
                    map={map}
                    toneMapped={false}
                />
            </mesh>

            {/* Sun light */}
            <pointLight
                ref={lightRef}
                position={[0, 0, -10]}
                color={new THREE.Color(1, 0.7, 0.4)}
                intensity={6}
                distance={150}
                decay={2}
            />
        </>
    );
}
