import React, { useState } from 'react'
import { GLTFResult } from '../types'

export default function Lamp({ info }: { info: GLTFResult }) {
    const [power, setPower] = useState(false);
    const { nodes, materials } = info;

    const togglePower = () => {
        setPower(!power);
    }

    return (
        <group position={[0.5, 0.815, -2.09]} scale={[0.1, 0.015, 0.1]} onClick={togglePower}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder001.geometry}
                material={materials.Silver}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder001_1.geometry}
                material={power ? materials['Light Gray'] : materials['Dark Gray']}
            />
            {power && <pointLight
                position={[0, 15, 0]}
                color={'#a8a8a8'}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-bias={-0.0001}
            />}
        </group>
    )
}
