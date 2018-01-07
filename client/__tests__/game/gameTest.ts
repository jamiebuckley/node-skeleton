import Game from "../../src/game/game";

const mockDoesStuff = jest.fn();
mockDoesStuff.mockReturnValue('blah');

/**
 * Necessary syntax to mock a required Typescript class
 */
jest.mock("../../src/game/gameDependency", () => {
  return {
    'GameDependency': () => {
      return {
        doesStuff: mockDoesStuff
      }
    }
  }
});

describe("game", () => {
  it("should call it's dependency", () => {
    mockDoesStuff.mockReturnValue('blue');
    const game = new Game();
  });
});