import getNeighbours from './getNeighbours.js';

describe('Get the adjacent neighbours of a node', () => {
  const gridSize = 8;

  test('Throws error if x and y are not integers', () => {
    expect(() => getNeighbours('a', 4, gridSize)).toThrow();
    expect(() => getNeighbours(2, 'b', gridSize)).toThrow();
    expect(() => getNeighbours(2.5, 4, gridSize)).toThrow();
    expect(() => getNeighbours(2, 4.5, gridSize)).toThrow();
  });

  test('Throws error if x or y are out of bounds', () => {
    expect(() => getNeighbours(-1, 4, gridSize)).toThrow();
    expect(() => getNeighbours(2, 8, gridSize)).toThrow();
    expect(() => getNeighbours(10, 10, gridSize)).toThrow();
  });

  test('Valid inputs do not throw errors', () => {
    expect(() => getNeighbours(2, 4, gridSize)).not.toThrow();
    expect(() => getNeighbours(0, 0, gridSize)).not.toThrow();
    expect(() => getNeighbours(7, 7, gridSize)).not.toThrow();
  });

  test('Returns correct neighbours', () => {
    let neighbours;

    neighbours = getNeighbours(2, 4, gridSize);
    expect(neighbours).toEqual(
      expect.arrayContaining([
        [0, 3],
        [0, 5],
        [1, 2],
        [1, 6],
        [3, 2],
        [3, 6],
        [4, 3],
        [4, 5],
      ])
    );

    neighbours = getNeighbours(0, 0, gridSize);
    expect(neighbours).toEqual(
      expect.arrayContaining([
        [1, 2],
        [2, 1],
      ])
    );

    neighbours = getNeighbours(7, 7, gridSize);
    expect(neighbours).toEqual(
      expect.arrayContaining([
        [5, 6],
        [6, 5],
      ])
    );
  });
});
