/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    for(let r = 0; r<board.length; r++){
        for(let c = 0; c<board[0].length; c++){
            let ns = count(board, r, c)
            if(board[r][c] == 1){
                if(ns < 2 || ns>3)board[r][c] = -1
            }
            else if(board[r][c] == 0 && ns == 3)board[r][c] = 2

        }
    }
    for(let r = 0; r<board.length; r++){
        for(let c = 0; c<board[0].length; c++){
            if(board[r][c] == 2)board[r][c] = 1
            else if(board[r][c] == -1)board[r][c] = 0
        }
    }
}

let dirs = [[1,0], [0,1], [1,-1], [-1,1], [0,-1], [-1,0], [1,1], [-1,-1]]

function isValid(grid, row, col){
    return (row>=0 && row<grid.length) && (col >=0 && col<grid[0].length)
}

function count(board, r, c){
    let ns = 0
    for(let dir of dirs){
        const [x, y] = dir
        let row = x + r
        let col = y + c
        if(isValid(board, row, col)){
            if(board[row][col] == 1 || board[row][col] == -1)ns++
        }
    }
    return ns
}