import * as React from "react";

interface  StatisticsProps {
    xWins: number
    oWins: number
    totalGames: number
    isDarkMode: boolean
}

const Statistics: React.FC<StatisticsProps> = ({xWins, oWins, totalGames, isDarkMode}: StatisticsProps) => {
  const x_stat = isDarkMode ? 'square-dark-x' : 'square-light-x'
  const o_stat = isDarkMode ? 'square-dark-o' : 'square-light-o'
    return (
        <div className="mt-3 bg-dark text-light p-2 rounded-5">
            <h3>Game Statistics</h3>
            <p className={`rounded-5 p-2 ${x_stat} stat-text`}>Total Games Played: {totalGames}</p>
            <p className={`rounded-5 p-2 ${x_stat} stat-text`}>X Wins: {xWins}</p>
            <p className={`rounded-5 p-2 ${o_stat} stat-text`}>O Wins: {oWins}</p>
        </div>
    )
}

export default Statistics