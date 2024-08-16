import adjList from './adjList.js';

// Function for getting the shortest path between "start" and "end" vertices
export default function shortestPath(start, end) {
  const list = adjList();
  const rows = Math.sqrt(list.length);

  function validateArguments() {
    // Check that "start" and "end" are arrays of size 2
    if (!Array.isArray(start) || start.length !== 2 || !Array.isArray(end) || end.length !== 2) {
      throw new Error('Start and "end" must be arrays of size 2.');
    }

    // Check that all values inside "start" and "end" are integers
    if (
      !Number.isInteger(start[0]) ||
      !Number.isInteger(start[1]) ||
      !Number.isInteger(end[0]) ||
      !Number.isInteger(end[1])
    ) {
      throw new Error('All values inside "start" and "end" arrays must be integers.');
    }

    // Validate bounds
    if (
      start[0] < 0 ||
      start[0] > rows - 1 ||
      start[1] < 0 ||
      start[1] > rows - 1 ||
      end[0] < 0 ||
      end[0] > rows - 1 ||
      end[1] < 0 ||
      end[1] > rows - 1
    ) {
      throw new Error(
        `Out of bounds!\nstart: [${start[0]}, ${start[1]}], end: [${end[0]}, ${end[1]}]\nRange limit: [0, ${rows - 1}]`
      );
    }
  }

  // Helper function for retrieving index of a vertex from the adjacency list
  function getIndex([x, y]) {
    return x * rows + y;
  }

  // Check for invalid arguments
  validateArguments();

  // Get the "start" and "end" vertex indices
  const startIndex = getIndex(start);
  const endIndex = getIndex(end);

  // Queue vertices that have yet to be visited
  const queue = [startIndex]; // Initialize as the "start" vertex

  // Store visited vertices and the vertex that preceded it
  const visited = new Map();
  visited.set(startIndex, null); // "start" vertex has no predecessor

  while (queue.length > 0) {
    // Pop the vertex from the front of the queue and store as the current vertex
    const currentIndex = queue.shift();

    // If found the "end" vertex
    if (currentIndex === endIndex) {
      break;
    }

    // Get current vertex from the adjacency list
    const currentVertex = list[currentIndex];

    // Get the indices of every neighbour of the current vertex
    currentVertex.neighbours.forEach((neighbour) => {
      const neighbourIndex = getIndex(neighbour);

      // If this neighbour vertex has not been visited yet, add it and its predecessor to visited
      if (!visited.has(neighbourIndex)) {
        // Storing the predecessor allows for backtracking the path when the target is found
        visited.set(neighbourIndex, currentIndex);

        // Push the neighbour to the queue
        queue.push(neighbourIndex);
      }
    });
  }

  // If never reached the "end" vertex, return an empty array
  if (!visited.has(endIndex)) {
    return [];
  }

  // Backtrack to build the path from "end" to start
  let index = endIndex;
  const path = [];

  // "start" vertex has null predecessor for exiting loop
  while (index !== null) {
    path.unshift(list[index].pos);
    index = visited.get(index);
  }

  return path;
}
