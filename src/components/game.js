import React, { Component } from "react";
import Wrapper from "./wrapper";
import Banner from "./banner";
import Cards from "./cards";
import Shapes from "../shapes.json";

class Game extends Component {
  state = {
    score: 0,
    highscore: 0,
    data: Shapes,
    clicks: [],
    alert: "Click an image to start."
  };

  handleClick = (event) => {
    // Getting the value and name of the input which triggered the change
    var id = event.target.id;
    // Updating the state
    var ran = 0;
    for (var i = 0; i < this.state.clicks.length; i++) {
      if (id === this.state.clicks[i]) {
        this.setState({
          alert: "You have already selected this image. Game Over",
        });
        ran = 1;
        this.endGame();
      } 
    }
    if (ran === 0) {
      this.setState({ score: this.state.score + 1 });
      this.state.clicks.push(id);
      console.log(this.state.data);
      this.shuffle();
    } 
  };

shuffle = function() {
// this.state.data.map((props) => (
//   {props.order} = math.random
// ))
//   for (i = 0; i < this.state.data.length; i++) {


  
  
// }
this.state.data.sort(() => Math.random() - 0.1);
console.log(this.state.data);
}


  endGame = function() {

    if (this.state.score > this.state.highscore){
      this.setState({highscore: this.state.score})
    }
    this.setState({score: 0});
    this.setState({clicks: []});
    this.setState({alert: "Click an image to start."});
  }


  render() {
    return (
      <Wrapper>
        <Banner score={this.state.score} highscore={this.state.highscore}/>
        <h1 className="title">Shape Memory Game</h1>
        <Cards data={this.state.data} handleClick={this.handleClick} />
      </Wrapper>
    );
  }
}
export default Game;
