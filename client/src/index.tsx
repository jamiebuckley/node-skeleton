import * as React from "react";
import * as ReactDOM from "react-dom";
import * as BABYLON from "babylonjs";

import Scene from "./scene";

export interface HelloProps { compiler: string; framework: string; }

export const Canvas = (props: { id: string, width: number, height: number }) => <canvas {...props}></canvas>;

ReactDOM.render(
  <Canvas id="gameCanvas" width={800} height={600} />,
  document.getElementById("main")
);

const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const engine = new BABYLON.Engine(canvas, true);
const scene = new Scene(engine, canvas);;

engine.runRenderLoop(() => { // Register a render loop to repeatedly render the scene
  scene.onUpdate();
});


window.addEventListener("resize", () => { // Watch for browser/canvas resize events
  engine.resize();
});