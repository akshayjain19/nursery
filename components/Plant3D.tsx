'use client';

import { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

type BranchConfig = {
  attachY: number;
  stemTilt: number;
  stemLength: number;
  leafTilt: [number, number, number];
  leafScale: [number, number, number];
  phase: number;
  color: string;
};

const BRANCHES: BranchConfig[] = [
  {
    attachY: 0.05,
    stemTilt: 0.85,
    stemLength: 0.42,
    leafTilt: [0.35, -0.25, -0.55],
    leafScale: [1.55, 0.06, 0.72],
    phase: 0,
    color: '#3d9b68',
  },
  {
    attachY: 0.35,
    stemTilt: -0.75,
    stemLength: 0.48,
    leafTilt: [0.15, 0.35, 0.45],
    leafScale: [1.65, 0.06, 0.78],
    phase: 1.4,
    color: '#4caf78',
  },
  {
    attachY: 0.62,
    stemTilt: 0.55,
    stemLength: 0.44,
    leafTilt: [0.25, -0.15, -0.35],
    leafScale: [1.45, 0.055, 0.68],
    phase: 2.6,
    color: '#52b87e',
  },
  {
    attachY: 0.88,
    stemTilt: -0.45,
    stemLength: 0.4,
    leafTilt: [0.1, 0.25, 0.3],
    leafScale: [1.35, 0.055, 0.62],
    phase: 0.8,
    color: '#45a872',
  },
  {
    attachY: 1.1,
    stemTilt: 0.25,
    stemLength: 0.38,
    leafTilt: [0.45, 0.05, -0.1],
    leafScale: [1.25, 0.05, 0.58],
    phase: 3.2,
    color: '#5cc48a',
  },
];

function BranchLeaf({ config }: { config: BranchConfig }) {
  const leafRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const stemEnd = config.stemLength * 0.92;

  useFrame((state) => {
    if (!leafRef.current || !groupRef.current) return;
    const t = state.clock.elapsedTime;
    const sway = Math.sin(t * 0.7 + config.phase) * 0.06;
    leafRef.current.rotation.x = config.leafTilt[0] + sway;
    leafRef.current.rotation.z = config.leafTilt[2] + sway * 0.8;
    groupRef.current.rotation.z = config.stemTilt + sway * 0.4;
  });

  return (
    <group position={[0, config.attachY, 0]}>
      <group ref={groupRef}>
        <mesh position={[0, config.stemLength / 2, 0]}>
          <cylinderGeometry args={[0.018, 0.022, config.stemLength, 6]} />
          <meshStandardMaterial color="#2a5c3e" roughness={0.75} />
        </mesh>
        <group position={[0, stemEnd, 0]}>
          <mesh
            ref={leafRef}
            rotation={config.leafTilt}
            scale={config.leafScale}
          >
            <sphereGeometry args={[1, 12, 12]} />
            <meshStandardMaterial
              color={config.color}
              roughness={0.42}
              metalness={0.05}
              emissive={config.color}
              emissiveIntensity={0.16}
              side={THREE.DoubleSide}
            />
          </mesh>
        </group>
      </group>
    </group>
  );
}

function Spores() {
  const ref = useRef<THREE.Points>(null);
  const count = 28;
  const positions = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const seed = Math.sin(i * 12.9898) * 43758.5453;
      const rand = seed - Math.floor(seed);
      const seed2 = Math.sin((i + 1) * 78.233) * 43758.5453;
      const rand2 = seed2 - Math.floor(seed2);
      const seed3 = Math.sin((i + 2) * 45.164) * 43758.5453;
      const rand3 = seed3 - Math.floor(seed3);
      coords[i * 3] = (rand - 0.5) * 2.5;
      coords[i * 3 + 1] = rand2 * 2.2 + 0.3;
      coords[i * 3 + 2] = (rand3 - 0.5) * 1.5;
    }
    return coords;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.04;
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
        size={0.035}
        transparent
        opacity={0.5}
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
    groupRef.current.rotation.y = Math.sin(t * 0.35) * 0.1;
    groupRef.current.position.y = Math.sin(t * 0.8) * 0.03 - 0.2;
  });

  return (
    <group ref={groupRef} scale={0.72}>
      <mesh position={[0, 0.45, 0]}>
        <cylinderGeometry args={[0.03, 0.038, 1.35, 8]} />
        <meshStandardMaterial color="#2a5c3e" roughness={0.7} />
      </mesh>

      {BRANCHES.map((branch, index) => (
        <BranchLeaf key={index} config={branch} />
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
      className="h-full w-full"
      camera={{ position: [0, 0.55, 5.2], fov: 42 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 2]}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.65} color="#d0f0d8" />
      <directionalLight position={[4, 6, 4]} intensity={1.4} color="#f0ffe8" />
      <directionalLight position={[-3, 2, -2]} intensity={0.5} color="#d4f82c" />
      <pointLight position={[0, 2, 2]} intensity={0.7} color="#7fff9a" distance={10} />

      <Suspense fallback={null}>
        <Float speed={1.8} rotationIntensity={0.12} floatIntensity={0.35}>
          <Plant />
        </Float>
        <Spores />
      </Suspense>
    </Canvas>
  );
}
