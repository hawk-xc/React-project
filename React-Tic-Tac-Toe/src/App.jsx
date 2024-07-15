import { useState } from 'react'
import Button from './components/Button'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function resetClick() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  function handleClick(i) {
    if(squares[i] || callculateWinner(squares)) return;
    const nextPoint = squares.slice();
    nextPoint[i] = xIsNext ? 'X' : 'O';
    setSquares(nextPoint);
    setXIsNext(!xIsNext);

  }

  let status = '';
  let winner = callculateWinner(squares)
  if(winner) {
    status = "Winner : " + winner;
  } else {
    status = "Next Player : " + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="container">
        <h1>React Tic Tac Toe</h1>
        <div className="board">
            <Button value={squares[0]} onPointClick={() => handleClick(0)} />
            <Button value={squares[1]} onPointClick={() => handleClick(1)} />
            <Button value={squares[2]} onPointClick={() => handleClick(2)} />
            <Button value={squares[3]} onPointClick={() => handleClick(3)} />
            <Button value={squares[4]} onPointClick={() => handleClick(4)} />
            <Button value={squares[5]} onPointClick={() => handleClick(5)} />
            <Button value={squares[6]} onPointClick={() => handleClick(6)} />
            <Button value={squares[7]} onPointClick={() => handleClick(7)} />
            <Button value={squares[8]} onPointClick={() => handleClick(8)} />
        </div>
      <span className="status">{status}</span>
      {winner ? <span className='resetButton' onClick={resetClick}>Reset / Play again</span> : ''}
      </div>
    </>
  );
}

function callculateWinner(squares) {
  const lines = [
    // vertical
    [0, 1, 2],
    [6, 7, 8],
    [6, 7, 8],
    // horizontal
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  for(let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return false;
}