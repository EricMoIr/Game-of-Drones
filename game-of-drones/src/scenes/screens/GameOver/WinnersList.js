import React from 'react';
import Winner from './Winner';
import './styles.css';

const headStyle = {
  fontSize: "1.5em"
}
const WinnersList = ({winners}) => (
    <table className="table table-striped table-hover">
      <thead className="thead-dark">
        <tr>
          <th colSpan="2" style={headStyle}>All Time Winners</th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {winners.map((winner, i) => 
          {
            let className = "";
            if(i === 0) className = "glow";
            return <Winner key={i} className={className} name={winner.name} time={new Date(winner.time)}/>
        }
        )}
      </tbody>
    </table>
);
export default WinnersList;