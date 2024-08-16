import getNeighbours from './getNeighbours.js';

// Create an adjacency list for storing all the neighbours of each vertex
const adjList = (() => {
  // 8x8 grid
  const gridSize = 8;

  // Each vertex has positional coordinates and an array of vertex neighbours
  class Vertex {
    constructor(x, y) {
      this.pos = [x, y];
      this.neighbours = [];
    }
  }

  return function () {
    const vertices = [];

    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        vertices.push(new Vertex(x, y));
      }
    }

    vertices.forEach((vertex) => {
      vertex.neighbours = getNeighbours(vertex.pos[0], vertex.pos[1], gridSize);
    });

    return vertices;
  };
})();

export default adjList;
