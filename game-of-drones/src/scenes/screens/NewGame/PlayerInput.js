import React from 'react';
const PlayerInput = ({number, defaultName, onChange}) => {
    return (
        <div>
        <span>Player {number}</span> 
        <input 
        className="playerName" 
        type="text" 
        defaultValue={defaultName}
        onBlur={(event) => onChange(number-1, event.target.value)}/>
        </div>
    );
};
export default PlayerInput;