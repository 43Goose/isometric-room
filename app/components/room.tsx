import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Room(props: any) {

    return (
        <group {...props} dispose={null}>
            <group position={[0, 2, 0]} scale={[2.5, 2, 2.5]}>
                {/* walls */}
                <mesh castShadow receiveShadow geometry={props.nodes.Cube.geometry} material={props.materials.Gray} />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Cube_1.geometry}
                    material={props.materials['Light Gray']}
                />
            </group>
            <group position={[-1.85, 1.1, -0.65]} scale={[0.5, 0.04, 1.21]}>
                {/* desk */}
                <mesh castShadow receiveShadow geometry={props.nodes.Cube001.geometry} material={props.materials.Tan} />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Cube001_1.geometry}
                    material={props.materials.Black}
                />
            </group>
            <group position={[1.7, 0.73, -1.65]} scale={[0.375, 0.04, 0.2]}>
                {/* bed */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Cube006.geometry}
                    material={props.materials['Dark Blue']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Cube006_1.geometry}
                    material={props.materials.Blue}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Cube006_2.geometry}
                    material={props.materials.Brown}
                />
            </group>
            <group position={[-1, 1.1, -0.4]} scale={[0.3, 1, 0.3]}>
                {/* chair */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Cylinder.geometry}
                    material={props.materials.Gray}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Cylinder_1.geometry}
                    material={props.materials.Black}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={props.nodes.Rug.geometry}
                material={props.materials['Light Blue']}
                position={[-1.44, 0.13, -0.65]}
                scale={[0.847, 1, 1.4]}
            />
            <group
                position={[-2.285, 1.3, 1.06]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.048, 0.02, 0.048]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Cylinder002.geometry}
                    material={props.materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Cylinder002_1.geometry}
                    material={props.materials.Silver}
                />
            </group>
            <group position={[0.4, 1.1, -2]} scale={[0.5, 1, 0.3]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Cube011.geometry}
                    material={props.materials.Brown}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Cube011_1.geometry}
                    material={props.materials['Dark Brown']}
                />
            </group>
            <group position={[-0.7, 2.2, -2.47]} scale={[1, 0.7, 0.13]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Cube015.geometry}
                    material={props.materials.White}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Cube015_1.geometry}
                    material={props.materials.Black}
                />
            </group>
        </group>
    )
}