import React, { useState } from 'react';
import Button from './components/Button';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

export default function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function handlePlay(nextPoint) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextPoint];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }

    return (
      <li key={move} className='moves'>
        <span onClick={() => jumpTo(move)}>{description}</span>
      </li>
    );
  });

  return (
    <React.Fragment>
      <div className="game">
        <div className="gameboard">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    </React.Fragment>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;
    const nextPoint = squares.slice();
    nextPoint[i] = xIsNext ? 'X' : 'O';
    onPlay(nextPoint);
  }

  let status = '';
  let winner = calculateWinner(squares);
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? 'X' : 'O');
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
        {winner ? <span className='resetButton'>Reset / Play again</span> : ''}
      </div>
    </>
  );
}

function calculateWinner(squares) {
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
