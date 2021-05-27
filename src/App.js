import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helper';
import History from './components/History';
import StatusMessage from './Components/StatusMessage'

import './Styles/root.scss'
const new_game=[
  { board: Array(9).fill(null), isXNext: true },
]
const App = () => {
  const [history, setHistory] = useState(new_game);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const {winner,winningsquares} = calculateWinner(current.board);


  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory((prev) => {
      const last = prev[prev.length - 1];
      

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }

        return square;
      });

      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });

    setCurrentMove(prev => prev + 1);
  };
  const moveto=(move)=>{
    setCurrentMove(move)
  }
  const newgame=()=>{
  setHistory(new_game)
  setCurrentMove(0)
  }

  return (
    <div className="app">
      <h1>TIC <span className="text-green">TAC</span> TOE</h1>
      <StatusMessage winner={winner} current={current}/>
      <Board initial={current.board} handleSquareClick={handleSquareClick} winningsquares={ winningsquares}/>
      <button type='button' onClick={newgame} className={`btn-reset ${winner?'active':''} `}>
        Start New Game</button>
        <h2 style={{fontWeight:'normal'}}>Current history</h2>
      <History history={history} moveto={moveto} currentMove={currentMove}/>
      <div className="bg-balls" />
    </div>
  );
};

export default App;
