'use client';

import { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

type LeafConfig = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  phase: number;
  color: string;
};

const LEAVES: LeafConfig[] = [
  { position: [0, 1.1, 0], rotation: [0.4, 0.1, 0.15], scale: [1.5, 0.14, 0.75], phase: 0, color: '#4caf78' },
  { position: [-0.55, 1.45, 0.15], rotation: [0.55, -0.35, -0.25], scale: [1.25, 0.12, 0.65], phase: 1.1, color: '#3d9b68' },
  { position: [0.6, 1.35, -0.1], rotation: [0.45, 0.4, 0.3], scale: [1.3, 0.11, 0.62], phase: 2.3, color: '#52b87e' },
  { position: [-0.25, 1.75, 0.25], rotation: [0.7, -0.2, -0.15], scale: [1.1, 0.1, 0.55], phase: 0.7, color: '#45a872' },
  { position: [0.35, 1.85, 0.1], rotation: [0.65, 0.25, 0.2], scale: [1.15, 0.1, 0.58], phase: 1.8, color: '#3d8f62' },
  { position: [0, 2.05, 0], rotation: [0.85, 0, 0], scale: [0.95, 0.09, 0.5], phase: 3.1, color: '#5cc48a' },
  { position: [-0.7, 0.85, -0.2], rotation: [0.3, -0.5, -0.35], scale: [1.0, 0.1, 0.5], phase: 2.7, color: '#368f5a' },
  { position: [0.75, 0.95, 0.15], rotation: [0.35, 0.55, 0.4], scale: [1.05, 0.1, 0.52], phase: 4.0, color: '#48a66e' },
];

function AnimatedLeaf({ config }: { config: LeafConfig }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x =
      config.rotation[0] + Math.sin(t * 0.75 + config.phase) * 0.07;
    ref.current.rotation.z =
      config.rotation[2] + Math.sin(t * 0.95 + config.phase) * 0.09;
    ref.current.rotation.y =
      config.rotation[1] + Math.cos(t * 0.55 + config.phase) * 0.04;
  });

  return (
    <mesh
      ref={ref}
      position={config.position}
      rotation={config.rotation}
      scale={config.scale}
    >
      <sphereGeometry args={[1, 14, 14]} />
      <meshStandardMaterial
        color={config.color}
        roughness={0.38}
        metalness={0.08}
        emissive={config.color}
        emissiveIntensity={0.08}
      />
    </mesh>
  );
}

function Spores() {
  const ref = useRef<THREE.Points>(null);
  const count = 40;
  const positions = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const seed = Math.sin(i * 12.9898) * 43758.5453;
      const rand = seed - Math.floor(seed);
      const seed2 = Math.sin((i + 1) * 78.233) * 43758.5453;
      const rand2 = seed2 - Math.floor(seed2);
      const seed3 = Math.sin((i + 2) * 45.164) * 43758.5453;
      const rand3 = seed3 - Math.floor(seed3);
      coords[i * 3] = (rand - 0.5) * 3;
      coords[i * 3 + 1] = rand2 * 3;
      coords[i * 3 + 2] = (rand3 - 0.5) * 2;
    }
    return coords;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    const pos = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += Math.sin(state.clock.elapsedTime + i) * 0.0008;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#d4f82c"
        size={0.04}
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

function Plant() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = Math.sin(t * 0.35) * 0.12;
    groupRef.current.position.y = Math.sin(t * 0.8) * 0.03 - 0.4;
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.035, 0.045, 1.8, 10]} />
        <meshStandardMaterial color="#2a5c3e" roughness={0.7} />
      </mesh>
      <mesh position={[-0.15, 0.6, 0]} rotation={[0, 0, 0.4]}>
        <cylinderGeometry args={[0.025, 0.03, 0.7, 8]} />
        <meshStandardMaterial color="#2a5c3e" roughness={0.7} />
      </mesh>
      <mesh position={[0.18, 0.5, 0]} rotation={[0, 0, -0.35]}>
        <cylinderGeometry args={[0.025, 0.03, 0.75, 8]} />
        <meshStandardMaterial color="#2a5c3e" roughness={0.7} />
      </mesh>

      {LEAVES.map((leaf, index) => (
        <AnimatedLeaf key={index} config={leaf} />
      ))}

      <mesh position={[0, -1.05, 0]}>
        <cylinderGeometry args={[0.58, 0.48, 0.75, 24]} />
        <meshStandardMaterial color="#9a7030" roughness={0.92} />
      </mesh>
      <mesh position={[0, -0.72, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.12, 24]} />
        <meshStandardMaterial color="#4a3520" roughness={0.95} />
      </mesh>
      <mesh position={[0, -0.66, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.46, 24]} />
        <meshStandardMaterial color="#1f160e" roughness={1} />
      </mesh>
    </group>
  );
}

export default function Plant3D() {
  return (
    <Canvas
      camera={{ position: [0, 0.6, 4.2], fov: 40 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 2]}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.45} color="#b8e8c8" />
      <directionalLight position={[4, 6, 4]} intensity={1.1} color="#f0ffe8" />
      <directionalLight position={[-3, 2, -2]} intensity={0.35} color="#d4f82c" />
      <pointLight position={[0, 2, 2]} intensity={0.5} color="#7fff9a" distance={8} />

      <Suspense fallback={null}>
        <Float speed={1.8} rotationIntensity={0.12} floatIntensity={0.35}>
          <Plant />
        </Float>
        <Spores />
      </Suspense>
    </Canvas>
  );
}
