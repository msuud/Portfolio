import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// This component creates a subtle camera rig that follows the mouse
function CameraRig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();

  return useFrame(() => {
    // Lerp (linearly interpolate) the camera position to create a smooth follow effect
    // The multiplication factor (e.g., mouse.x * 2) controls the range of motion
    camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 1, camera.position.z), 0.02);
    // Make the camera always look at the center of the scene
    camera.lookAt(0, 0, 0);
  });
}

function FloatingParticles({ count = 2000 }) {
  const mesh = useRef();
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const range = 20;
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * range;
      positions[i * 3 + 1] = (Math.random() - 0.5) * range;
      positions[i * 3 + 2] = (Math.random() - 0.5) * range;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.05;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.075;
    }
  });

  return (
    <Points ref={mesh} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#6366f1"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

// The FloatingGeometry component has been removed from this file.

function Background3D() {
  const isMobile = window.innerWidth <= 768;
  
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: -1 
    }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        performance={{ min: 0.5 }}
        dpr={isMobile ? 1 : 2}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#6366f1" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />
        
        <FloatingParticles count={isMobile ? 800 : 1500} />
        {/* The call to <FloatingGeometry /> has been removed from here. */}
        
        {/* Add the camera rig for mouse interaction */}
        {!isMobile && <CameraRig />}
      </Canvas>
    </div>
  );
}

export default Background3D;
