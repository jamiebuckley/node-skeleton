import { GameDependency } from "./gameDependency";

export default class Game {
  constructor() {
    console.log(new GameDependency().doesStuff());
  }
}