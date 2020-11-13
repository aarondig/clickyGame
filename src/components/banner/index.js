import React from "react";
import "./style.css";

function Banner(props) {
  return <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">
                <h1 className="title">Memory Game</h1>
                <h2 className="score">Score: {props.score} High Score: {props.highscore}</h2>
            </span>
        </nav>
}

export default Banner;
