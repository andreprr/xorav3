"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, useGLTF } from "@react-three/drei";

function Logo() {
  const { scene } = useGLTF("/XORA.glb");

  useFrame((state) => {
    scene.rotation.y = state.clock.elapsedTime * 0.18;
  });

  return (
    <primitive
      object={scene}
      scale={2.4}
      position={[0, -0.9, 0]}
    />
  );
}

export default function XoraLogo() {
  return (
    <Canvas
    
      dpr={[1, 2]}
      gl={{ antialias: true }}
      camera={{
        position: [0, 0, 6],
        fov: 30,
      }}
      className="h-full w-full"
    >
        <ambientLight intensity={2.2} />

        <directionalLight
          position={[6, 6, 6]}
          intensity={3.5}
        />

        <directionalLight
          position={[-6, -6, -3]}
          intensity={1.2}
        />

        <Environment preset="city" />

        <Float
          speed={1.2}
          rotationIntensity={0.12}
          floatIntensity={0.18}
        >
          <Logo />
        </Float>
      </Canvas>
  );
}

useGLTF.preload("/XORA.glb");