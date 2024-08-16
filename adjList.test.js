import adjList from './adjList.js';

describe('adjList', () => {
  const gridSize = 8;

  test('Create 64 vertices for an 8x8 grid', () => {
    const vertices = adjList();
    expect(vertices.length).toBe(gridSize * gridSize);
  });

  test('Correctly assign positional coordinates to each vertex', () => {
    const vertices = adjList();

    let index = 0;

    // Outer loop for x coordinates
    for (let x = 0; x < gridSize; x++) {
      // Inner loop for y coordinates
      for (let y = 0; y < gridSize; y++) {
        const vertex = vertices[index];
        expect(vertex.pos).toEqual([x, y]);
        index++;
      }
    }
  });
});
