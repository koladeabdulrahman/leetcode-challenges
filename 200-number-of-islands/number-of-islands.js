// var numIslands = function(grid) {
//     if (!grid.length || !grid[0].length)
//         return 0;
    
//     const rows = grid.length;
//     const cols = grid[0].length;
//     let islands = 0;
    
//     const dfs = (row, col) => {
//         if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] !== '1')
//             return;
//         grid[row][col] = '0';
//         dfs(row + 1, col);
//         dfs(row, col + 1);
//         dfs(row - 1, col);
//         dfs(row, col - 1);
//     };
    
//     for (let row = 0; row < rows; row++) {
//         for (let col = 0; col < cols; col++) {
//             if (grid[row][col] === '1') {
//                 dfs(row, col);
//                 islands++;
//             }
//         }
//     }
    
//     return islands;
// };


/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const m= grid.length,n=grid[0].length
    let lands=0
    const dfs=(r,c)=>{
        if(r<0 || c<0 || r>=m || c>= n || grid[r][c]!=='1') return
        grid[r][c] = 0
        dfs(r+1,c)
        dfs(r,c+1)
        dfs(r,c-1)
        dfs(r-1,c)

    }
    for(let r=0;r<m;r++){
        for(let c=0;c<n;c++){
            if(grid[r][c]=='1'){
                dfs(r,c);
                lands++
            }
        }
    }
    return lands
};