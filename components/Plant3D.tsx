'use client';

import { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

type StemConfig = {
  base: [number, number, number];
  height: number;
  tilt: [number, number, number];
  leafRotation: [number, number, number];
  leafScale: [number, number, number];
  phase: number;
  color: string;
};

type FlowerConfig = {
  base: [number, number, number];
  height: number;
  tilt: [number, number, number];
  phase: number;
};

const STEMS: StemConfig[] = [
  {
    base: [-0.14, -0.55, 0.06],
    height: 1.55,
    tilt: [0.12, 0, -0.18],
    leafRotation: [0.55, -0.2, -0.35],
    leafScale: [0.38, 0.045, 1.15],
    phase: 0,
    color: '#1f5c3a',
  },
  {
    base: [0.16, -0.55, -0.04],
    height: 1.35,
    tilt: [-0.08, 0, 0.22],
    leafRotation: [0.45, 0.25, 0.3],
    leafScale: [0.36, 0.04, 1.05],
    phase: 1.3,
    color: '#256b42',
  },
  {
    base: [0.04, -0.55, 0.14],
    height: 1.2,
    tilt: [0.05, 0, 0.08],
    leafRotation: [0.6, 0.05, 0.1],
    leafScale: [0.34, 0.04, 0.95],
    phase: 2.1,
    color: '#2a7549',
  },
  {
    base: [-0.08, -0.55, -0.12],
    height: 1.45,
    tilt: [0.1, 0, -0.12],
    leafRotation: [0.5, -0.35, -0.25],
    leafScale: [0.37, 0.042, 1.1],
    phase: 0.6,
    color: '#1a5234',
  },
  {
    base: [0.2, -0.55, 0.1],
    height: 1.05,
    tilt: [-0.15, 0, 0.15],
    leafRotation: [0.65, 0.3, 0.4],
    leafScale: [0.32, 0.038, 0.88],
    phase: 3.0,
    color: '#2d7a4e',
  },
  {
    base: [-0.2, -0.55, -0.06],
    height: 0.95,
    tilt: [0.18, 0, -0.28],
    leafRotation: [0.7, -0.15, -0.45],
    leafScale: [0.3, 0.036, 0.82],
    phase: 1.8,
    color: '#226040',
  },
  {
    base: [0.1, -0.55, -0.15],
    height: 1.28,
    tilt: [-0.05, 0, 0.18],
    leafRotation: [0.48, 0.18, 0.22],
    leafScale: [0.35, 0.04, 1.0],
    phase: 2.5,
    color: '#287248',
  },
];

const FLOWERS: FlowerConfig[] = [
  {
    base: [-0.06, -0.55, 0.02],
    height: 1.65,
    tilt: [0.08, 0, -0.1],
    phase: 0.4,
  },
  {
    base: [0.12, -0.55, 0.08],
    height: 1.5,
    tilt: [-0.06, 0, 0.14],
    phase: 1.9,
  },
  {
    base: [0.02, -0.55, -0.1],
    height: 1.72,
    tilt: [0.04, 0, 0.05],
    phase: 3.3,
  },
];

function PeaceLilyLeaf({ config }: { config: StemConfig }) {
  const groupRef = useRef<THREE.Group>(null);
  const leafRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current || !leafRef.current) return;
    const t = state.clock.elapsedTime;
    const sway = Math.sin(t * 0.65 + config.phase) * 0.05;
    groupRef.current.rotation.x = config.tilt[0] + sway * 0.5;
    groupRef.current.rotation.z = config.tilt[2] + sway * 0.4;
    leafRef.current.rotation.x = config.leafRotation[0] + sway;
    leafRef.current.rotation.z = config.leafRotation[2] + sway * 0.6;
  });

  return (
    <group position={config.base}>
      <group ref={groupRef}>
        <mesh position={[0, config.height / 2, 0]}>
          <cylinderGeometry args={[0.012, 0.016, config.height, 6]} />
          <meshStandardMaterial color="#2d5a3a" roughness={0.8} />
        </mesh>
        <mesh
          ref={leafRef}
          position={[0, config.height, 0]}
          rotation={config.leafRotation}
          scale={config.leafScale}
        >
          <sphereGeometry args={[1, 10, 10]} />
          <meshStandardMaterial
            color={config.color}
            roughness={0.28}
            metalness={0.12}
            emissive={config.color}
            emissiveIntensity={0.06}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </group>
  );
}

function PeaceLilyFlower({ config }: { config: FlowerConfig }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    const sway = Math.sin(t * 0.55 + config.phase) * 0.04;
    groupRef.current.rotation.x = config.tilt[0] + sway;
    groupRef.current.rotation.z = config.tilt[2] + sway * 0.5;
  });

  return (
    <group position={config.base}>
      <group ref={groupRef}>
        <mesh position={[0, config.height / 2, 0]}>
          <cylinderGeometry args={[0.01, 0.012, config.height, 6]} />
          <meshStandardMaterial color="#3d6b48" roughness={0.85} />
        </mesh>
        <group position={[0, config.height, 0]} rotation={[0.25, 0, 0]}>
          <mesh scale={[0.22, 0.035, 0.42]}>
            <sphereGeometry args={[1, 10, 10]} />
            <meshStandardMaterial
              color="#f5f5f0"
              roughness={0.35}
              metalness={0.05}
              emissive="#ffffff"
              emissiveIntensity={0.08}
              side={THREE.DoubleSide}
            />
          </mesh>
          <mesh position={[0, 0.02, 0.08]} scale={[0.04, 0.04, 0.18]}>
            <cylinderGeometry args={[1, 1, 1, 8]} />
            <meshStandardMaterial color="#e8e0c8" roughness={0.5} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

function Spores() {
  const ref = useRef<THREE.Points>(null);
  const count = 20;
  const positions = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const seed = Math.sin(i * 12.9898) * 43758.5453;
      const rand = seed - Math.floor(seed);
      const seed2 = Math.sin((i + 1) * 78.233) * 43758.5453;
      const rand2 = seed2 - Math.floor(seed2);
      const seed3 = Math.sin((i + 2) * 45.164) * 43758.5453;
      const rand3 = seed3 - Math.floor(seed3);
      coords[i * 3] = (rand - 0.5) * 1.8;
      coords[i * 3 + 1] = rand2 * 1.8 + 0.8;
      coords[i * 3 + 2] = (rand3 - 0.5) * 1.2;
    }
    return coords;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.03;
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
        size={0.025}
        transparent
        opacity={0.35}
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
    groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.08;
    groupRef.current.position.y = Math.sin(t * 0.75) * 0.02 - 0.15;
  });

  return (
    <group ref={groupRef} scale={0.72}>
      {STEMS.map((stem, index) => (
        <PeaceLilyLeaf key={index} config={stem} />
      ))}
      {FLOWERS.map((flower, index) => (
        <PeaceLilyFlower key={index} config={flower} />
      ))}

      <mesh position={[0, -0.88, 0]}>
        <cylinderGeometry args={[0.52, 0.44, 0.65, 24]} />
        <meshStandardMaterial color="#eceae6" roughness={0.55} metalness={0.05} />
      </mesh>
      <mesh position={[0, -0.58, 0]}>
        <cylinderGeometry args={[0.44, 0.44, 0.08, 24]} />
        <meshStandardMaterial color="#2a1f14" roughness={0.95} />
      </mesh>
      <mesh position={[0, -0.54, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.4, 24]} />
        <meshStandardMaterial color="#1a140e" roughness={1} />
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
      <ambientLight intensity={0.7} color="#e8f4ec" />
      <directionalLight position={[3, 5, 4]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-4, 2, -2]} intensity={0.35} color="#c8e8d0" />
      <pointLight position={[1, 3, 3]} intensity={0.5} color="#ffffff" distance={12} />

      <Suspense fallback={null}>
        <Float speed={1.5} rotationIntensity={0.08} floatIntensity={0.25}>
          <Plant />
        </Float>
        <Spores />
      </Suspense>
    </Canvas>
  );
}
