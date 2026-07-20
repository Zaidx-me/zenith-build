"use client";

import * as THREE from "three";
import { useRef, useState, useEffect, memo } from "react";
import { Canvas, createPortal, useFrame } from "@react-three/fiber";
import { useFBO, useGLTF, MeshTransmissionMaterial } from "@react-three/drei";
import { easing } from "maath";

const NavbarGlass = memo(function NavbarGlass() {
  return (
    <Canvas
      camera={{ position: [0, 0, 20], fov: 15 }}
      gl={{ alpha: true }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      <GlassBar />
    </Canvas>
  );
});

function GlassBar() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { nodes } = useGLTF("/assets/3d/bar.glb") as unknown as {
    nodes: Record<string, { geometry: THREE.BufferGeometry }>;
  };
  const buffer = useFBO(512, 128);
  const [scene] = useState(() => new THREE.Scene());
  const geoWidthRef = useRef(1);

  useEffect(() => {
    const geo = nodes["Cube"]?.geometry;
    if (geo) {
      geo.computeBoundingBox();
      geoWidthRef.current =
        (geo.boundingBox?.max.x ?? 0) - (geo.boundingBox?.min.x ?? 0) || 1;
    }
  }, [nodes]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const { gl, viewport, pointer, camera } = state;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);

    const destX = (pointer.x * v.width) / 2 * 0.3;
    const destY = v.height / 2 - 0.2;
    easing.damp3(meshRef.current.position, [destX, destY, 15], 0.08, delta);

    const maxWorld = v.width * 0.9;
    const desired = maxWorld / geoWidthRef.current;
    meshRef.current.scale.setScalar(Math.min(0.12, desired));

    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);

    gl.setClearColor(0x000000, 0);
  });

  return (
    <>
      {createPortal(
        <>
          <color attach="background" args={["#0a0a0f"]} />
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={0.6} color="#D7E2EA" />
          <pointLight position={[-5, 3, 3]} intensity={0.4} color="#3b82f6" />
          <pointLight position={[3, -3, 4]} intensity={0.3} color="#8b5cf6" />

          <mesh position={[-3, 0, -5]}>
            <planeGeometry args={[8, 8]} />
            <meshStandardMaterial
              color="#D7E2EA"
              transparent
              opacity={0.04}
            />
          </mesh>
          <mesh position={[3, 1, -6]}>
            <planeGeometry args={[6, 6]} />
            <meshStandardMaterial
              color="#3b82f6"
              transparent
              opacity={0.03}
            />
          </mesh>
          <mesh position={[0, -2, -4]}>
            <planeGeometry args={[10, 4]} />
            <meshStandardMaterial
              color="#8b5cf6"
              transparent
              opacity={0.02}
            />
          </mesh>
          <mesh position={[0, 0, -3]}>
            <circleGeometry args={[2, 32]} />
            <meshStandardMaterial
              color="#D7E2EA"
              transparent
              opacity={0.06}
            />
          </mesh>
        </>,
        scene
      )}

      <mesh
        ref={meshRef}
        scale={0.12}
        rotation-x={Math.PI / 2}
        geometry={nodes["Cube"]?.geometry}
      >
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          transmission={1}
          roughness={0}
          thickness={10}
          ior={1.15}
          color="#ffffff"
          attenuationColor="#ffffff"
          attenuationDistance={0.25}
          chromaticAberration={0.1}
          anisotropy={0.01}
          distortion={0.2}
          distortionScale={0.3}
          temporalDistortion={0.1}
        />
      </mesh>
    </>
  );
}

export default function NavbarGlassWrapper() {
  return <NavbarGlass />;
}
