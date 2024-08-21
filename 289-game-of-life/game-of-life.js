/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    for(let row = 0; row<board.length; row++){
        for(let col = 0; col<board[0].length; col++){
            let ns = count(board, row, col)
            let cell = board[row][col]
            if(cell == 1 && (ns < 2 || ns > 3))board[row][col] = -1
            else if(cell == 0){
                if(ns == 3)board[row][col] = 2
            }
        }
    }
    for(let row = 0; row<board.length; row++){
        for(let col = 0; col<board[0].length; col++){
            let cell = board[row][col]
            if(cell == 2)board[row][col] = 1
            if(cell == -1 )board[row][col] = 0
        }
    }
};

function isValid(grid, r, c){
    return r>=0 && r<grid.length && c>=0 && c<grid[0].length
}


function count(grid, r, c){
    let ns = 0
    let dirs = [[1,0], [0,1], [1,-1],[-1,1], [0,-1],[-1,0], [1,1], [-1,-1]]
    for(let dir of dirs){
        const [x, y] = dir
        let row = x + r
        let col = y + c
        if(isValid(grid, row, col) && 
        (grid[row][col] == 1 || grid[row][col] == -1))ns++
    }
    return ns
}

