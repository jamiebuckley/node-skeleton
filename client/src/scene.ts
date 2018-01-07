
export default class Scene {

  private _scene: BABYLON.Scene;
  private _canvas: HTMLCanvasElement;
  private _camera: BABYLON.ArcRotateCamera;

  constructor(engine: BABYLON.Engine, canvas: HTMLCanvasElement) {
    this._scene = new BABYLON.Scene(engine);
    this._canvas = canvas;

    this._camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), this._scene);
    this._camera.attachControl(canvas, true);

    const light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), this._scene);
    const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter:2}, this._scene);
  }

  onUpdate() {
    this._scene.render();
  }
}