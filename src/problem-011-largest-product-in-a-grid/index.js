const RADIUS = 3;
module.exports = (grid) => {
  let largestProduct = 0;

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      const adjacentProducts = [];
      if (x >= RADIUS) {
        adjacentProducts.push(
          calculateProduct([
            grid[x][y],
            grid[x - 1][y],
            grid[x - 2][y],
            grid[x - 3][y],
          ])
        );
      }
      if (x >= RADIUS && y >= RADIUS) {
        adjacentProducts.push(
          calculateProduct([
            grid[x][y],
            grid[x - 1][y - 1],
            grid[x - 2][y - 2],
            grid[x - 3][y - 3],
          ])
        );
      }
      if (y >= RADIUS) {
        adjacentProducts.push(
          calculateProduct([
            grid[x][y],
            grid[x][y - 1],
            grid[x][y - 2],
            grid[x][y - 3],
          ])
        );
      }
      if (x < grid.length - RADIUS && y >= RADIUS) {
        adjacentProducts.push(
          calculateProduct([
            grid[x][y],
            grid[x + 1][y - 1],
            grid[x + 2][y - 2],
            grid[x + 3][y - 3],
          ])
        );
      }
      if (x < grid.length - RADIUS && y < grid[x].length - RADIUS) {
        adjacentProducts.push(
          calculateProduct([
            grid[x][y],
            grid[x + 1][y],
            grid[x + 2][y],
            grid[x + 3][y],
          ])
        );
      }
      if (x < grid.length - RADIUS && y < grid[x].length - RADIUS) {
        adjacentProducts.push(
          calculateProduct([
            grid[x][y],
            grid[x + 1][y + 1],
            grid[x + 2][y + 2],
            grid[x + 3][y + 3],
          ])
        );
      }
      if (y < grid[x].length - RADIUS) {
        adjacentProducts.push(
          calculateProduct([
            grid[x][y],
            grid[x][y + 1],
            grid[x][y + 2],
            grid[x][y + 3],
          ])
        );
      }
      if (x > RADIUS && y < grid[x].length - RADIUS) {
        adjacentProducts.push(
          calculateProduct([
            grid[x][y],
            grid[x - 1][y + 1],
            grid[x - 2][y + 2],
            grid[x - 3][y + 3],
          ])
        );
      }
      const maxAdjacentProduct = Math.max(...adjacentProducts);
      if (maxAdjacentProduct > largestProduct) {
        largestProduct = maxAdjacentProduct;
      }
    }
  }

  return largestProduct;
};

const calculateProduct = (array) =>
  array.reduce((total, current) => total * current);
