import * as React from "react";

interface  StatisticsProps {
    xWins: number
    oWins: number
    totalGames: number
}

const Statistics: React.FC<StatisticsProps> = ({xWins, oWins, totalGames}: StatisticsProps) => {
    return (
        <div className="mt-3 bg-dark text-light p-2 rounded-5">
            <h3>Game Statistics</h3>
            <p className="bg-warning text-dark rounded-5">Total Games Played: {totalGames}</p>
            <p className="bg-danger rounded-5 text-light">X Wins: {xWins}</p>
            <p className="bg-success rounded-5 text-light">O Wins: {oWins}</p>
        </div>
    )
}

export default Statistics