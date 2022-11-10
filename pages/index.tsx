import type { NextPage } from 'next';
import { act, Canvas } from '@react-three/fiber';
// import { AnimatedBox } from '../components';
import Lights from '../components/Lights';
import Ground from '../components/Ground';
import {
  OrbitControls,
  Stats,
  PerspectiveCamera,
  Torus,
  useTexture,
  TransformControls,
} from '@react-three/drei';
import { TestModel } from '../components/TestModal';
import Model from '../components/Model';
import Player from '../components/Player';
// const TexturedSpheres = () => {
//   const map = useTexture('./textures/worn_rock_natural_01_diff_1k.png');
//   // const displacementMap = useTexture(
//   //   './textures/worn_rock_natural_01_disp_1k.png'
//   // );
//   const normalMap = useTexture('./textures/worn_rock_natural_01_nor_gl_1k.png');

//   return (
//     <>
//       {/* <mesh scale={[0.5, 0.5, 0.5]} position={[-1, 0, 0]}>
//         <sphereGeometry />
//         <meshStandardMaterial map={map} />
//       </mesh> */}
//       {/* recommend way */}
//       <mesh scale={[0.5, 0.5, 0.5]} position={[0, 0, 0]} castShadow>
//         <sphereGeometry />
//         <meshStandardMaterial map={map} normalMap={normalMap} />
//       </mesh>
//       {/* highest quality but low performance */}
//       {/* <mesh scale={[0.5, 0.5, 0.5]} position={[1, 0, 0]}>
//         <sphereGeometry args={[1, 100, 100]} />
//         <meshStandardMaterial
//           map={map}
//           normalMap={normalMap}
//           displacementMap={displacementMap}
//           displacementScale={0.05}
//         />
//       </mesh> */}
//     </>
//   );
// };

const Home: NextPage = () => {
  const testing = true;
  return (
    <div className='container'>
      <Canvas shadows>
        {/* <PerspectiveCamera makeDefault /> */}
        {testing ? <Stats /> : null}
        {testing ? <axesHelper args={[2]} /> : null}
        {testing ? <gridHelper args={[10, 10]} /> : null}
        <OrbitControls />
        {/* <TexturedSpheres /> */}
        <Lights />
        <Model boundary={100} count={20} />
        {/* <TestModel position={[2, 0, 0]} /> */}
        {/* <Ground /> */}
        {/* <Torus /> */}
        <Player />
      </Canvas>
    </div>
  );
};

export default Home;
