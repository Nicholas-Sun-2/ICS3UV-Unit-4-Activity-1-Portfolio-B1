/**
 * @author Nicholas Sun
 * @version 1.0.0
 * @date 2025-12-08
 * @fileoverview Prints a grid of X's.
 */

// Initialize the grid.
let grid: string = "";

for (let row: number = 1; row <= 10; row += 1) {
  for (let column: number = 1; column <= 10; column += 1) {
    grid = grid + "x ";
  }
  // For every row that is complete, add a newline to create a new row.
  grid = grid + "\n";
}

// Output the completed grid.
console.log(grid);
