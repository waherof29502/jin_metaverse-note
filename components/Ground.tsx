const Ground: React.FC = () => {
  return (
    <>
      <mesh rotation-x={Math.PI * -0.5} receiveShadow>
        <planeBufferGeometry args={[100, 100]} />
        <meshStandardMaterial color={'#458754'} />
      </mesh>
    </>
  );
};

export default Ground;
