/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let map = {}
    let sum = 0
    for(let row = 0; row<grid.length; row++){
        let r = ""
        for(let col = 0; col<grid[0].length; col++){
            r+=grid[row][col] + ","
        }
        map[r]? map[r]++: map[r] = 1
    }
    for(let col = 0; col<grid[0].length; col++){
        let c = ""
        for(let row = 0; row<grid.length; row++){
            c+=grid[row][col] + ","
        }
        if(map[c]){
            sum+=map[c]
        }
        else map[c] = 1
    }
    console.log(map)
    return sum
};