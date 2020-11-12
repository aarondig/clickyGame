import React, { Component } from "react";
import Wrapper from "./wrapper";
import Cards from "./cards";
import Shapes from "../shapes.json";

class Game extends Component {
  state = {
    score: 0,
    highscore: 0,
    data: Shapes,
    clicks: [],
    endGame: false,
    alert: "Click an image to start."
  };




  handleClick = (event) => {
    // Getting the value and name of the input which triggered the change
    var id = event.target.id;
    // Updating the state
    var ran = 0;
    for (var i = 0; i < this.state.clicks.length; i++) {
      if (id === this.state.clicks[i]) {
        // this.setState({
        //   alert: "You have already selected this image. Game Over",
        // });
        this.setState({ endGame: true });
        console.log(this.state.endGame);
        ran = 1;
      } 
    }
    if (ran === 0) {
      this.setState({ score: this.state.score + 1 });
      this.state.clicks.push(id);
    } 
  };

  


  render() {
    return (
      <Wrapper>
        <h1 className="title">Shape Memory Game</h1>
        <Cards data={this.state.data} handleClick={this.handleClick} />
      </Wrapper>
    );
  }
}
export default Game;
