import React from 'react';
import Move from "./Move";

const MoveList = ({moves, handleChangeMove, value}) => (
  <select value={value} onChange={(event) => handleChangeMove(event.target.value)}>
    {moves.map((move, i) => 
      <Move key={i} name={move} />
    )}
  </select>
);
export default MoveList;