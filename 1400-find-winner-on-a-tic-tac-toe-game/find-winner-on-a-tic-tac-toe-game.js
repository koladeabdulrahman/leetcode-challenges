/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    let board = Array.from({length: 3}, ()=> new Array(3).fill(''))
    let count = 0
    for(let move of moves){
        let [a, b]  = move
        board[a][b] = count%2 == 0? "x" : "o"
        count++
    }
    board = board.flat()
    if (winB(board) == "x") return "A"
    if (winB(board) == "o") return "B"
    return moves.length < 9? "Pending": "Draw"
};


function winB(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}