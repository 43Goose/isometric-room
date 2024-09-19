'use client';
import { Canvas } from "@react-three/fiber";
import MoonLight from "./components/moonlight";
import Controls from "./components/controls";
import { Environment, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { Room } from "./components/room";
import Fan from "./components/fan";
import Lamp from "./components/lamp";
import Laptop from "./components/laptop";
import { Suspense } from "react";

export default function Home() {

  return (
    <main className="h-screen">
      <div className="w-full h-full">
        <Suspense>
          <Canvas flat shadows>
            <Controls />
            <MoonLight position={[-1, 2.5, -4]} />
            <group position={[0, -1, 0]}>
              <Room />
              <Fan />
              <Lamp />
              <Laptop />
            </group>
            <Environment preset="sunset" background backgroundBlurriness={0.8} backgroundIntensity={0.1} environmentIntensity={0.2} />
            <PerspectiveCamera makeDefault position={[4, 3, 4]} />
          </Canvas>
        </Suspense>
      </div>
    </main>
  );
}

useGLTF.preload('/Room.glb')
