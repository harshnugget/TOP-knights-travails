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
      // Loops twice to swap the addends for x and y
      for (let i = 1; i <= 2; i++) {
        // Calculate neighbor coordinates
        let neighbour = [
          x + applySign(combo[0], i),
          y + applySign(combo[1], 3 - i), // (3 - i) gives 2 when i=1 and 1 when i=2
        ];

        // Add the neighbor to the neighbours array if they are within bounds
        if (isWithinBounds(neighbour)) {
          neighbours.push(neighbour);
        }
      }
    });

    // Return the list of valid neighbours
    return neighbours;
  };
})();

export default getNeighbours;
