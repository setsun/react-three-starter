import { CameraShake, Sparkles, OrbitControls } from "@react-three/drei";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Glitch,
  Noise,
  Vignette
} from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";
import { useState, useEffect } from "react";

/**
 * Developer Documentation:
 * - three.js: https://threejs.org/docs/
 * - @react-three/fiber (React renderer for three.js): https://docs.pmnd.rs/react-three-fiber/getting-started/introduction
 * - @react-three/drei (easy utilities for @react-three/fiber): https://drei.pmnd.rs/
 * - @react-three/postprocessing (out-of-the-box VFX for @react-three/fiber): https://docs.pmnd.rs/react-postprocessing/introduction
 */
const MainScene = () => {
  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.75, 16, 16]} />
        <meshBasicMaterial wireframe />
      </mesh>

      <mesh position={[0, -0.75, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[5, 5]} />
        <meshBasicMaterial wireframe />
      </mesh>
    </group>
  );
};

export default function App() {
  return (
    <Canvas shadows style={{ background: "black" }}>
      <MainScene />

      {/** for visual debugging purposes */}
      <axesHelper />

      {/** camera controls for navigating around the scene */}
      <OrbitControls makeDefault />

      {/** post-processing effects, uncomment individual effects to preview results */}
      <EffectComposer>
        {/* <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        /> */}
        {/* <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} /> */}
        {/* <Noise opacity={0.02} /> */}
        {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
        {/* <Glitch /> */}
      </EffectComposer>
    </Canvas>
  );
}
