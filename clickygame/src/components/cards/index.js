import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="container">
      <div className="row">
        {props.data.map((card) => (
          <div key={card.id} className="card" onClick={props.handleClick}>
            <img id={card.id} src={card.image} className="card-img-top" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
