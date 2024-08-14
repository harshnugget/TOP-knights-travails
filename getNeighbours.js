/*
    Function to get neighbours from provided coordinates x, y

    // Set bounds "MIN" and "MAX" for an 8x8 grid

    // Create an array "neighbours" which will store all possible moves (coordinates) from x and y

    // If a possible move exceeds bounds, do not push to these coordinates to the neighbours array
*/

const getNeighbours = (() => {
  // Bounds for an 8x8 grid
  const MIN = 0;
  const MAX = 7;

  // All the possible sign combinations for moving x and y
  const signCombinations = [
    ['+', '+'],
    ['-', '-'],
    ['+', '-'],
    ['-', '+'],
  ];

  // Helper function to apply the sign and calculate new coordinates
  function applySign(sign, value) {
    return sign === '+' ? value : -value;
  }

  // Helper function to check if a coordinate is within bounds
  function isWithinBounds([x, y]) {
    return x >= MIN && x <= MAX && y >= MIN && y <= MAX;
  }

  return function (x, y) {
    // Verify x and y are numbers
    if (!Number.isInteger(x) || !Number.isInteger(y) || x < MIN || x > MAX || y < MIN || y > MAX) {
      throw new Error(
        `Invalid arguments: x=${x}, y=${y}.\nMust be integers within the range ${MIN}-${MAX}.`
      );
    }

    const neighbours = [];

    // Loop through each sign combination
    signCombinations.forEach((combo) => {
      // Calculate neighbours using the signCombinations
      let neighbour1 = [x + applySign(combo[0], 1), y + applySign(combo[1], 2)];
      let neighbour2 = [x + applySign(combo[0], 2), y + applySign(combo[1], 1)];

      // Add the neighbours to the list if they are within bounds
      [neighbour1, neighbour2].forEach((neighbour) => {
        if (isWithinBounds(neighbour)) {
          neighbours.push(neighbour);
        }
      });
    });

    // Return the list of valid neighbours
    return neighbours;
  };
})();

export default getNeighbours;
