import { Mesh, MeshStandardMaterial } from "three"
import { GLTF } from "three-stdlib"

export type GLTFResult = GLTF & {
    nodes: nodesType,
    materials: materialsType
}

export type nodesType = {
    [key: string]: Mesh
}

export type materialsType = {
    [key: string]: MeshStandardMaterial
}