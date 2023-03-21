import { useFrame } from "@react-three/fiber";

import React, { useRef } from "react";

const Box = (props) => {
  const ref = useRef();

  useFrame((state, delta) => (ref.current.rotation.x += 0.01));

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial color="orange" />
    </mesh>
  );
};

export default Box;
