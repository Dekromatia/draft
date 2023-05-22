import { renderModel } from "./renderModel.js";

export function loadModel(scene) {
  const modelLink = 'https://rssda.su/auxil/ar0535.html'; // replace with your model URL
  renderModel(scene, modelLink); // call the renderModel function
}