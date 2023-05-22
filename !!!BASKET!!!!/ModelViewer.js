import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ModelViewer = ({ modelLink }) => {
  const Model = React.useMemo(() => {
    const loader = new GLTFLoader();
    let result = null;
    loader.load(modelLink, (gltf) => {
      result = gltf.scene;
    });
    return result;
  }, [modelLink]);

  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls />
      <Stars />
      <ambientLight />
      <directionalLight position={[1, 1, 1]} />
      {Model && <primitive object={Model} />}
    </Canvas>
  );
};

export default ModelViewer;