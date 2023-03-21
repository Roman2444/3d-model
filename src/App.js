import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Box from "./Box";
import Scene from "./model/Scene";
import { OrbitControls } from "@react-three/drei";

const App = () => {
  const groupRef = useRef();

  return (
    <Canvas camera={{ position: [1, 1, 5] }}>
      <color attach="background" args={["lightblue"]} />
      <group ref={groupRef}>
        {/* <Box position={[-4, 0, 0]} />
      <Box position={[0, 0, 0]} rotation={[Math.PI / 4, Math.PI / 4, 0]} />
      <Box position={[4, 0, 0]} /> */}

        <hemisphereLight intensity={0.35} />
        <spotLight
          position={[10, 10, 10]}
          angile={0.3}
          penumbra={1}
          intensity={2}
          castShadow
        />

        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </group>
      <OrbitControls
        enableDamping
        dampingFactor={0.1}
        target={groupRef.current ? groupRef.current.position : [0, 0, 0]}
      />
    </Canvas>
  );
};

export default App;
