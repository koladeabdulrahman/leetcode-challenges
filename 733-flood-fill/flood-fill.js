/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let [m,n] = [image.length, image[0].length]
    let visited = Array.from({length:m}, ()=>new Array(n).fill(false)) 
    let prevColor = image[sr][sc]
    let dirs = [[1,0],[0,1],[-1, 0], [0,-1]]
    function dfs(grid, row, col){
        if(!isValid(grid, row, col))return
        visited[row][col] = true
        grid[row][col] = color
        for(let [x,y] of dirs){
            let nr = x+row
            let nc = y+col
            dfs(grid, nr, nc)
        }
    }

    function isValid(grid, row, col){
        return row>=0 && row<m && col>=0 && col<n && !visited[row][col] && grid[row][col] == prevColor
    }

    dfs(image, sr,sc)
    return image
};


