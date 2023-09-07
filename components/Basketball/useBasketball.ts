import * as THREE from 'three'
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export const useBasketball = () => {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta/2
    meshRef.current.rotation.x += delta/2
  })

  return [meshRef] as const
}