'use client';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react'
import { Group, Object3DEventMap } from 'three';
import { GLTFResult } from '../types';

export default function Fan({ info }: { info: GLTFResult }) {
    const [power, setPower] = useState(false);
    const fanRef = useRef<Group<Object3DEventMap>>(null);
    const { nodes, materials } = info;

    useFrame(() => {
        if (power) {
            fanRef.current!.rotation.y += 0.05;
        }
    })

    const togglePower = () => {
        setPower(!power);
    }

    return (
        <group dispose={null} onClick={togglePower}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fan_Stand.geometry}
                material={materials['Dark Gray']}
                position={[-1.779, 1.207, 0.009]}
                rotation={[0, Math.PI / 9, 0]}
                scale={0.02}
            />
            <group position={[-1.727, 1.42, -0.009]} rotation={[0, Math.PI / 9, -1.396]} scale={0.114}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle001.geometry}
                    material={materials['Dark Gray']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle001_1.geometry}
                    material={materials['Light Blue']}
                />
                <group ref={fanRef} position={[0, 0.027, 0]} scale={0.472}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane003.geometry}
                        material={materials.Silver}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane003_1.geometry}
                        material={materials['Light Blue']}
                    />
                </group>
            </group>
        </group>
    )
}
