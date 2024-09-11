import clsx from 'clsx';

type CellType = {
    val : string|null;
    onClick: () => void; 
    winningSquare: boolean;
}

export default function Cell( {val , onClick, winningSquare }:CellType){
    return (
        <button className={clsx("w-32 h-32 border-2 text-center content-center font-extrabold  text-6xl disabled:bg-gray-100  hover:bg-gray-100",
            {
                'disabled:bg-green-300': winningSquare
            }
        )} 
        onClick={onClick}
        disabled={val ? true : false}
        >{val}</button>
    )
}