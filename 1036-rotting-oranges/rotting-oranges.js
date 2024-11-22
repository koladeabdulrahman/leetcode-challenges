var orangesRotting = function(grid) {
  let queue = [], time = 0, oranges = 0
  let [m,n] = [grid.length, grid[0].length]
  for(let row = 0; row<m; row++){
    for(let col = 0; col<n.length; col++){
        if(grid[row][col] == 1)oranges++
        if(grid[row][col] == 2)queue.push([row,col,0])
    }
  }
  let dirs = [[0,1],[0,-1], [-1,0], [1,0]]

  function isValid(row,col){
    return row<m && row>=0 && col>=0 && col<n
  }

  while(queue.length){
    let [row, col, min] = queue.shift()
    for(let [r,c] of dirs){
        let nr = row + r
        let nc = col + c
        if(isValid(nr, nc) && grid[nr][nc] == 1){
            oranges--
            min++
            queue.push([nr,nc, min])
            time = min
        }
    }
  }
  return oranges? -1 : time
};



























var orangesRotting = function(grid) {
  let queue = [], oranges = 0, time = 0;
  
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 1) oranges++
      else if (grid[r][c] === 2) queue.push([r,c,0]);
    }
  }
    
  const dirs = [[0,1], [1,0], [0,-1], [-1,0]];
  const endR = grid.length - 1, endC = grid[0].length - 1;
  
  while (queue.length && oranges) {
    const [curR, curC, mins] = queue.shift();
    
    if (grid[curR][curC] === 1) {
      grid[curR][curC] = 2;
      oranges--;
      time = mins;
    }

    for (let [addR, addC] of dirs) {
      const [newR, newC] = [curR + addR, curC + addC];
      if (newR < 0 || newR > endR || newC < 0 || newC > endC) continue;
      if (grid[newR][newC] === 1) {
        queue.push([newR, newC, mins + 1])
      }
    }
  }
  
  return oranges ? -1 : time;
};


