/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    for(let row = 0; row<board.length; row++){
        for(let col = 0; col<board[0].length; col++){
            let cell = board[row][col]
            let ns = count(board, row, col)
            if(cell == 1){
                if(ns < 2 || ns > 3)board[row][col] = -1
            }
            else if(ns == 3)board[row][col] = 2
        }
    }
    for(let row = 0; row<board.length; row++){
        for(let col = 0; col<board[0].length; col++){
            if(board[row][col] == 2)board[row][col] = 1
            if(board[row][col] == -1)board[row][col] = 0
        }
    }
    return board;
};

function isValid(grid, row, col){
    return row>=0 && row<grid.length && col>=0 && col<grid[0].length
}


function count(grid, r, c){
    let dirs = [[0,1],[1,0],[0,-1],[-1,0],[1,-1],[-1,1],[1,1],[-1,-1]]
    let res = 0
    for(let dir of dirs){
        let [x,y] = dir
        let row = x + r
        let col = c + y
        if(isValid(grid, row, col))if(grid[row][col] == 1 || grid[row][col] == -1)res++
    }
    return res
}