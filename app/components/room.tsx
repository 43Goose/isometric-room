import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTFResult } from '../types';

export function Room() {
    const bed: GLTFResult = useGLTF('/Bed.glb') as GLTFResult;
    const room: GLTFResult = useGLTF('/Room.glb') as GLTFResult;
    const door: GLTFResult = useGLTF('/Door.glb') as GLTFResult;
    const window: GLTFResult = useGLTF('/Window.glb') as GLTFResult;
    const dresser: GLTFResult = useGLTF('/Dresser.glb') as GLTFResult;
    const rug: GLTFResult = useGLTF('/Rug.glb') as GLTFResult;
    const table: GLTFResult = useGLTF('/Table.glb') as GLTFResult;
    const chair: GLTFResult = useGLTF('/Chair.glb') as GLTFResult;

    return (
        <group dispose={null}>
            <group position={[0, 2, 0]} scale={[2.5, 2, 2.5]}>
                {/* walls */}
                <mesh castShadow receiveShadow geometry={room.nodes.Cube.geometry} material={room.materials.Gray} />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={room.nodes.Cube_1.geometry}
                    material={room.materials['Light Gray']}
                />
            </group>
            <group position={[-1.85, 1.1, -0.65]} scale={[0.5, 0.04, 1.21]}>
                {/* table */}
                <mesh castShadow receiveShadow geometry={table.nodes.Cube001.geometry} material={table.materials.Tan} />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={table.nodes.Cube001_1.geometry}
                    material={table.materials.Black}
                />
            </group>
            <group position={[1.7, 0.73, -1.65]} scale={[0.375, 0.04, 0.2]}>
                {/* bed */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={bed.nodes.Cube006.geometry}
                    material={bed.materials['Dark Blue']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={bed.nodes.Cube006_1.geometry}
                    material={bed.materials.Blue}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={bed.nodes.Cube006_2.geometry}
                    material={bed.materials.Brown}
                />
            </group>
            <group position={[-1, 1.1, -0.4]} scale={[0.3, 1, 0.3]}>
                {/* chair */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={chair.nodes.Cylinder.geometry}
                    material={chair.materials.Gray}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={chair.nodes.Cylinder_1.geometry}
                    material={chair.materials.Black}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={rug.nodes.Rug.geometry}
                material={rug.materials['Light Blue']}
                position={[-1.44, 0.13, -0.65]}
                scale={[0.847, 1, 1.4]}
            />
            <group
                position={[-2.285, 1.3, 1.06]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.048, 0.02, 0.048]}>
                {/* door? */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={door.nodes.Cylinder002.geometry}
                    material={door.materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={door.nodes.Cylinder002_1.geometry}
                    material={door.materials.Silver}
                />
            </group>
            <group position={[0.4, 1.1, -2]} scale={[0.5, 1, 0.3]}>
                {/* Dresser */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={dresser.nodes.Cube011.geometry}
                    material={dresser.materials.Brown}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={dresser.nodes.Cube011_1.geometry}
                    material={dresser.materials['Dark Brown']}
                />
            </group>
            <group position={[-0.7, 2.2, -2.47]} scale={[1, 0.7, 0.13]}>
                {/* Window? */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={window.nodes.Cube015.geometry}
                    material={window.materials.White}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={window.nodes.Cube015_1.geometry}
                    material={window.materials.Black}
                />
            </group>
        </group>
    )
}