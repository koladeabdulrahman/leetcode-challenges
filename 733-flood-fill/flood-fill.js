/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    if(image[sr][sc] == color) return image

    let oldColor = image[sr][sc]

    function isValid(grid, row, col){
        return row<grid.length && row >= 0 && col >=0 && col<grid[0].length && grid[row][col] == oldColor && !visited[row][col]
    }

    let visited = Array.from({length: image.length}, 
    ()=>new Array(image[0].length).fill(false))

    let dirs = [[0,1],[0,-1],[1,0],[-1,0]]

    function bfs(grid, row, col){
        if(!isValid(grid, row, col))return
        console.log(row, col)
        grid[row][col] = color
        visited[row][col] = true
        for(let [r,c] of dirs){
            let nr = r + row
            let nc = c + col
            bfs(grid, nr, nc)
        }
    }
    bfs(image, sr, sc)
    return image
};
