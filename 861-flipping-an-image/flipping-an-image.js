/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let res = []
    for(let row of image){
        let newRow = row.reverse().map(char=>{
            if(char == 0)return 1
            else return 0
        })
        res.push(newRow)
    }
    return res
};