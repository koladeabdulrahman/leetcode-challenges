/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let [m, n] = [grid.length, grid[0].length]
    let visited = Array.from({length:m}, ()=>new Array(n).fill(false))

    function isValid(grid, row, col){
        return row<m && row>=0 && col <n && col>=0 && !visited[row][col] && grid[row][col] == "1"
    }

    function dfs(grid, row, col){
        const dirs = [[0,1],[0,-1],[-1,0],[1,0]]
        if(!isValid(grid, row, col))return
        grid[row][col] = 0
        visited[row][col] = true
        for(let [r, c] of dirs){
            let nr = row + r
            let nc = col + c
            dfs(grid, nr, nc)
        }
    }

    let count = 0
    for(let row = 0; row<m; row++){
        for(let col = 0; col<n; col++){
            if(grid[row][col] == "1"){
                dfs(grid, row, col)
                count++
            }
        }
    }

    return count
};