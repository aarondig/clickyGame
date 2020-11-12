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
    alert: "Click an image to start",
  };

  handleClick = (event) => {
    // Getting the value and name of the input which triggered the change
    const id = event.target.id;

    // Updating the state
    console.log(id);
    this.state.clicks.push(id);
    console.log(this.state.clicks);

    if (this.state.clicks.includes(id)) {
      this.setState({
        alert: "You have already selected this image. Game Over",
      });
      this.setState({ endGame: true });
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
