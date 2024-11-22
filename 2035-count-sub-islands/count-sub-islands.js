/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
    let isSub = true

    let count = 0

    let [m,n]=[grid1.length, grid1[0].length]

    let dirs = [[0,1],[0,-1],[-1,0],[1,0]]

    function isValid(row, col){
        return row<m && row>=0 && col<n && col>=0 && grid2[row][col] == 1
    }

    function dfs(row, col){
        if(!isValid(row, col))return 
        grid2[row][col] = 0
        if(grid1[row][col] !== 1)isSub = false
        for(let [r,c] of dirs){
            let nr = row + r
            let nc = col + c
            dfs(nr,nc)
        }
    }
    for(let row = 0; row<m; row++){
        for(let col = 0; col<n; col++){
            if(grid2[row][col] == 1){
                dfs(row, col)
                if(isSub)count++
            }
            isSub = true
        }
    }
    
    return count
};