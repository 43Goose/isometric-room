import React, { useState } from 'react'
import { GLTFResult } from '../types';
import { Object3D } from 'three';
import { useGLTF } from '@react-three/drei';

export default function Laptop() {
    const laptop: GLTFResult = useGLTF('/Laptop.glb') as GLTFResult;
    const [power, setPower] = useState(false);
    const [target] = useState(() => new Object3D)
    const { nodes, materials } = laptop;

    const togglePower = () => {
        setPower(!power);
    }

    return (
        <group>
            <group position={[-1.7, 1.15, -0.8]} scale={[0.2, 0.01, 0.3]} onClick={togglePower}>
                {/* laptop */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube009.geometry}
                    material={materials.Silver}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube009_1.geometry}
                    material={materials.Black}
                />

            </group>
            {power && <mesh
                castShadow
                receiveShadow
                geometry={nodes.Desktop.geometry}
                material={materials.Dektop}
                position={[-1.9, 1.355, -0.8]}
                rotation={[Math.PI / 2, 0.105, -Math.PI / 2]}
                scale={[0.284, 1, 0.181]}
            />}
            {power && <directionalLight
                position={[-1.85, 1.35, -0.8]}
                color={'#7397c9'}
                intensity={Math.PI}
                target={target}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-bias={-0.0001}
            />}
            {/* light target */}
            <primitive object={target} position={[1, 1.2, -0.8]} />
        </group>
    )
}
