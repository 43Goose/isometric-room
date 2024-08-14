'use client';
import { Canvas } from "@react-three/fiber";
import MoonLight from "./components/moonlight";
import Controls from "./components/controls";
import { Environment, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { Room } from "./components/room";
import Fan from "./components/fan";
import { GLTFResult } from "./types";
import Lamp from "./components/lamp";
import Laptop from "./components/laptop";

export default function Home() {
  const res: GLTFResult = useGLTF('/Room.glb') as GLTFResult;

  return (
    <main className="h-screen">
      <div className="w-full h-full">
        <Canvas flat shadows>
          <Controls />
          <MoonLight position={[-1, 2.5, -4]} />
          <group position={[0, -1, 0]}>
            <Room nodes={res.nodes} materials={res.materials} />
            <Fan info={res} />
            <Lamp info={res} />
            <Laptop info={res} />
          </group>
          <Environment preset="sunset" background backgroundBlurriness={0.8} backgroundIntensity={0.1} environmentIntensity={0.2} />
          <PerspectiveCamera makeDefault position={[4, 3, 4]} />
        </Canvas>
      </div>
    </main>
  );
}

useGLTF.preload('/Room.glb')
