"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";
import { useRef } from "react";
import type { Group } from "three";

function Lattice() {
  const group = useRef<Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!group.current) return;
    group.current.rotation.y = t * 0.08;
    group.current.rotation.x = t * 0.04;
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh position={[0, 0, 0]}>
          <torusKnotGeometry args={[1.15, 0.32, 180, 12]} />
          <meshStandardMaterial
            color="#e1b36b"
            emissive="#b97738"
            metalness={0.6}
            roughness={0.2}
            wireframe
            transparent
            opacity={0.65}
          />
        </mesh>
      </Float>
      <Float speed={2.1} rotationIntensity={0.6} floatIntensity={0.7}>
        <mesh position={[2.2, 1.2, -1.2]}>
          <icosahedronGeometry args={[0.55, 1]} />
          <meshStandardMaterial
            color="#f2d39a"
            emissive="#e1b36b"
            metalness={0.4}
            roughness={0.3}
            transparent
            opacity={0.7}
          />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={0.7} floatIntensity={0.6}>
        <mesh position={[-2.3, -1.1, -1.5]}>
          <octahedronGeometry args={[0.45, 1]} />
          <meshStandardMaterial
            color="#c98744"
            emissive="#7a4b1f"
            metalness={0.3}
            roughness={0.4}
            transparent
            opacity={0.6}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function Scene() {
  return (
    <div className="scene" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#050608"]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[6, 4, 6]} intensity={1.2} color="#f2d39a" />
        <pointLight position={[-6, -4, -4]} intensity={0.6} color="#8a5223" />
        <Lattice />
        <Sparkles
          count={120}
          speed={0.3}
          size={2}
          opacity={0.45}
          scale={[12, 8, 8]}
          color="#f2d39a"
        />
        <EffectComposer>
          <Bloom luminanceThreshold={0.2} intensity={0.6} mipmapBlur />
          <Noise opacity={0.12} />
          <Vignette offset={0.35} darkness={0.75} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
