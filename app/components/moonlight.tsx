import React from 'react'

export default function MoonLight(props: any) {

    return (
        <mesh {...props}>
            <pointLight
                color={"white"}
                intensity={Math.PI}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-bias={-0.0001}
            />
        </mesh>
    )
}
