import React from 'react';
import RoundResult from "./RoundResult";

const headStyle = {
  backgroundColor: "#BBB"
}
const GameHistory = ({gameResults, players, className}) => (
  <div className="col">
    <table className="table table-striped table-hover">
        <thead style={headStyle}>
          <tr>
            <th>Round</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {gameResults.length === 0 && 
          <tr><td colSpan="2"> No results yet</td></tr>
          }
          {gameResults.map((roundResult, i) => 
            <RoundResult key={i} winner={roundResult} round={i+1} players={players}/>
          )}
        </tbody>
    </table>
  </div>
)
export default GameHistory;