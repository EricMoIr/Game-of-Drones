import React from 'react';

const RoundResult = ({winner, round, players}) => (
    <tr>
        <td>{round}</td>
        <td>{winner === -1? "Draw" : players[winner].name+" won the round"}</td>
    </tr>
);
export default RoundResult;