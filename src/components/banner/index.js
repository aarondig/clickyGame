import React from "react";
import "./style.css";

function Header(props) {
  return <div className="nav">{props.children}</div>;
}

export default Header;
