'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

function LightParallaxScene() {
  const meshRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.DirectionalLight>(null);
  const scroll = useScroll();

  useFrame(() => {
    if (meshRef.current && lightRef.current) {
      // Parallax movement based on scroll
      const offset = scroll.offset;
      
      // Light position follows scroll with parallax effect
      lightRef.current.position.x = Math.sin(offset * Math.PI * 2) * 5;
      lightRef.current.position.y = Math.cos(offset * Math.PI * 2) * 3;
      lightRef.current.position.z = 10 + offset * 5;
      
      // Subtle rotation for depth
      meshRef.current.rotation.y = offset * Math.PI * 0.5;
    }
  });

  return (
    <>
      <directionalLight
        ref={lightRef}
        position={[0, 0, 10]}
        intensity={1.5}
        color="#ffffff"
        castShadow
      />
      <ambientLight intensity={0.4} />
      
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial 
          color="#F8F6F3"
          roughness={0.1}
          metalness={0.1}
        />
      </mesh>
    </>
  );
}

interface WebGLLightParallaxProps {
  children: React.ReactNode;
  className?: string;
}

export default function WebGLLightParallax({ children, className = "" }: WebGLLightParallaxProps) {
  return (
    <div className={`relative ${className}`}>
      {/* WebGL Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ width: '100%', height: '100%' }}
        >
          <LightParallaxScene />
        </Canvas>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
