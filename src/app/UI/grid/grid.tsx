"use client"

import Cell from '@/app/UI/cell/cell';
import { useState } from 'react';

export default function Grid(){
    const [turn, setTurn] = useState(0);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [winningSquares, setWinningSquares] = useState(Array(9).fill(false));

    function handleClick(i:number){
        const nextSquares = squares.slice();
        if(turn%2 === 0){
            nextSquares[i] = "X";
        }
        else{
            nextSquares[i] = "O";
        }

        const winCondition = checkWinner(nextSquares);
        if(winCondition){
            for(let i =0;i<nextSquares.length;i++){
                if(nextSquares[i] === null){
                    nextSquares[i] = " ";
                }
            }
            const newWinningSquares = winningSquares.slice();
            for(let i = 0;i<winCondition.length;i++){
                newWinningSquares[winCondition[i]] = true;
            }
            setWinningSquares(newWinningSquares);
        }

        setSquares(nextSquares);
        setTurn(turn + 1);
        
    }

    function handleReset(){
        setTurn(0);
        setSquares(Array(9).fill(null));
        setWinningSquares(Array(9).fill(false));
    }

    function checkWinner(squares:Array<string|null>){
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
          ];
          for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              return [a, b, c];
            }
          }
          return null;
    }

    return (
        <div className="flex items-center justify-center flex-col ">
            <div className='shadow-xl'>
                <div className='flex justify-center flex-row'>
                    <Cell val={squares[0]} onClick={() => handleClick(0)} winningSquare={winningSquares[0]}/>
                    <Cell val={squares[1]} onClick={() => handleClick(1)} winningSquare={winningSquares[1]}/>
                    <Cell val={squares[2]} onClick={() => handleClick(2)} winningSquare={winningSquares[2]}/>
                </div>
                <div className='flex justify-center  flex-row'>
                    <Cell val={squares[3]} onClick={() => handleClick(3)} winningSquare={winningSquares[3]}/>
                    <Cell val={squares[4]} onClick={() => handleClick(4)} winningSquare={winningSquares[4]}/>
                    <Cell val={squares[5]} onClick={() => handleClick(5)} winningSquare={winningSquares[5]}/>
                </div>
                <div className='flex justify-center flex-row '>
                    <Cell val={squares[6]} onClick={() => handleClick(6)} winningSquare={winningSquares[6]}/>
                    <Cell val={squares[7]} onClick={() => handleClick(7)} winningSquare={winningSquares[7]}/>
                    <Cell val={squares[8]} onClick={() => handleClick(8)} winningSquare={winningSquares[8]}/>
                </div>
            </div>
            <button className='mt-10 border-2 p-3 rounded-md bg-gray-950 text-white shadow-md border-solid' onClick={handleReset}>RESET</button>
        </div>
    )
}