import shortestPath from './shortestPath.js';

function output(path) {
  if (path) {
    console.log(`You made it in ${path.length - 1} moves! Here's your path:`);

    path.forEach((vertex, index) => {
      console.log(index, vertex);
    });
  }
}

output(shortestPath([0, 0], [1, 2]));
