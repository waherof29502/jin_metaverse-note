import { useHelper } from '@react-three/drei';
import { useRef } from 'react';
import { DirectionalLightHelper } from 'three';

const Lights: React.FC = () => {
  const lightRef = useRef<THREE.DirectionalLight>();

  useHelper(lightRef, DirectionalLightHelper, 5, 'red');
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        ref={lightRef}
        position={[0, 10, 10]}
        castShadow
        shadow-mapSize-height={1000}
        shadow-mapSize-width={1000}
      />
      <hemisphereLight args={['#612285', '#575539', 0.2]} />
    </>
  );
};

export default Lights;
