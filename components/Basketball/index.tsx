import { Canvas, useFrame } from '@react-three/fiber';
import { Colors } from '../../styles/colors';
import { useBasketball } from './useBasketball';
import { useRef } from 'react';

const BasketballObject = () => {
  const [meshRef] = useBasketball();

  return (
    <mesh ref={meshRef} scale={1.8}>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={Colors.Primary} />
    </mesh>
  );
};

const Basketball = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 5]} intensity={1.5} />
      <BasketballObject />
    </Canvas>
  );
};

export default Basketball;
