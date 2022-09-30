import { useRef } from "react";
import { Mesh, Points } from "three";
import { useFrame } from "@react-three/fiber";

interface Props {
  speed?: number;
  reverse?: boolean;
}

export function useTurntable({ speed = 0.01, reverse }: Props) {
  const ref = useRef<Points>(null);

  useFrame(() => {
    if (ref.current) {
      const finalSpeed = reverse ? speed * -1 : speed;

      ref.current.rotation.y += finalSpeed;
    }
  });

  return ref;
}
