import React, { useState, useEffect } from 'react';
import './style.css'; // Importing CSS styles for the component

// Square component represents each individual square in the Tic Tac Toe grid
function Square({ value, onClick }) {
  return (
    <button className='square' onClick={onClick}>
      {value} {/* Display the value ('X', 'O', or empty) of the square */}
    </button>
  );
}

// Main TicTacToe component
export default function TicTacToe() {
  // State to store the values of the squares (9 squares in total)
  const [squares, setSquares] = useState(Array(9).fill(''));
  // State to track whose turn it is (X or O)
  const [isXTurn, setIsXTurn] = useState(true);
  // State to track the status message (winner, draw, or next player)
  const [status, setStatus] = useState('');
  console.log(squares); // Log the current state of squares for debugging

  // Function to determine the winner based on the current squares
  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2], // Rows
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], // Columns
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], // Diagonals
      [2, 4, 6],
    ];

    // Check each winning pattern
    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      // If a winning pattern is found, return the winner ('X' or 'O')
      if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
        return squares[x];
      }
    }
    return null; // No winner found
  }

  // Handle square click events
  function handleClick(getCurrentSquare) {
    let cpySquares = [...squares]; // Create a copy of the current squares
    // Check if there's already a winner or if the square is already filled
    if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;
    // Set the current square to 'X' or 'O' based on whose turn it is
    cpySquares[getCurrentSquare] = isXTurn ? 'X' : 'O';
    setIsXTurn(!isXTurn); // Switch turns
    setSquares(cpySquares); // Update the squares state
  }

  // Restart the game
  function handleRestart() {
    setIsXTurn(true); // Reset to X's turn
    setSquares(Array(9).fill('')); // Clear the squares
  }

  // Effect to update the status message based on the game state
  useEffect(() => {
    // Check for a draw or a winner
    if (!getWinner(squares) && squares.every((item) => item !== '')) {
      setStatus(`This is a draw! Please restart the game.`);
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}. Please restart the game.`);
    } else {
      setStatus(`Next player is ${isXTurn ? 'X' : 'O'}`);
    }
  }, [squares, isXTurn]); // Run this effect whenever squares or isXTurn changes

  return (
    <div className='tic-tac-toe-container'>
      {/* Render the Tic Tac Toe grid */}
      <div className='row'>
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className='row'>
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className='row'>
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <h1>{status}</h1> {/* Display the current status message */}
      <button onClick={handleRestart}>Restart</button> {/* Button to restart the game */}
    </div>
  );
}
