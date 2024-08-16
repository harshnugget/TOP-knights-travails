import shortestPath from './shortestPath.js';

describe('Get the shortest path between 2 vertices', () => {
  test('Invalid arguments', () => {
    expect(() => shortestPath()).toThrow('must be arrays of size 2');
    expect(() => shortestPath([0, 4, 2], [2, 5])).toThrow('must be arrays of size 2');

    expect(() => shortestPath([-1, 7], [2, 4])).toThrow('Out of bounds');
    expect(() => shortestPath([0, 0], [1, 8])).toThrow('Out of bounds');

    expect(() => shortestPath([0, 1.5], [2, 7])).toThrow('must be integers');
    expect(() => shortestPath(['a', 1], [2, 7])).toThrow('must be integers');
    expect(() => shortestPath([0, 0], [1, 'b'])).toThrow('must be integers');
  });
});

test('Return the correct shorted path', () => {
  let path = shortestPath([0, 0], [2, 1]);
  expect(path).toEqual([
    [0, 0],
    [2, 1],
  ]);

  path = shortestPath([0, 0], [7, 7]);
  expect(path.length).toBe(7);
});
