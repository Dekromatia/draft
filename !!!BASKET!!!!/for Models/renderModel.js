import * as BABYLON from 'babylonjs';

export function renderModel(scene, modelLink) {
  BABYLON.SceneLoader.ImportMesh(
    '',
    modelLink,
    '',
    scene,
    (meshes) => {
      // do something with the loaded meshes
    }
  );
}