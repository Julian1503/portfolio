import React, { Suspense } from 'react';
import {Canvas} from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';
import Loader from '../Loader';

type BallProps = {
  imgUrl: string;
}

const Ball = ({imgUrl} : BallProps) => {
  const [decal] = useTexture([imgUrl]);

  return (
      <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1, 2]} />
          <meshStandardMaterial
              color="#3d3d3d"
              polygonOffset
              polygonOffsetFactor={-5}
              flatShading
          />
          <Decal
              position={[0, 0, 1]}
              rotation={[2 * Math.PI, 0, 6.25]}
              map={decal}
          />
        </mesh>
      </Float>
  );
};

type BallCanvasProps = {
    icon: string;
}

const BallCanvas = ({ icon } : BallCanvasProps) => {
  return (
      <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={<Loader />}>
          <OrbitControls enableZoom={false} position={0} />
          <Ball imgUrl={icon} />
        </Suspense>

        <Preload all />
      </Canvas>
  );
};

export default BallCanvas;
