import React, { Component } from 'react';
import {withErrorsResetAndNavigation} from '../../../reducers/hocs';
import WinnersList from './WinnersList';
import {getWinners} from '../../../services';

const playAgainStyle = {
  marginBottom: "20px"
};

class GameOver extends Component{
  constructor(){
    super();
    this.state = {
      winners: []
    };
  }
  async componentDidMount(){
    const {result, error} = await getWinners();
    if(error){
      this.props.addError(error.id, error.message);
      return;
    }
    const winners = result;
    this.setState({
      winners
    });
  }
  handlePlayAgain = () => {
    this.props.navigate("NEW_GAME");
  }
  render(){
    return (
      <React.Fragment>
        <WinnersList winners={this.state.winners.reverse()}/>
        <button style={playAgainStyle} onClick={() => this.handlePlayAgain()}>Play Again</button>
      </React.Fragment>
    );
  }
}
export default withErrorsResetAndNavigation(GameOver);