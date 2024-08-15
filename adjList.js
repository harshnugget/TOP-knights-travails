import getNeighbours from './getNeighbours.js';

const adjList = (() => {
  class Node {
    constructor(x, y) {
      this.pos = [x, y];
      this.neighbours = [];
    }
  }

  return function () {
    const tiles = [];

    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        tiles.push(new Node(x, y));
      }
    }

    tiles.forEach((tile) => {
      tile.neighbours = getNeighbours(tile.pos[0], tile.pos[1]);
    });

    return tiles;
  };
})();

export default adjList;
