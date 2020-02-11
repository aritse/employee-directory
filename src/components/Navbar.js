import React from "react";
import "../styles/Navbar.css";

const style = {
  justifyContent: "flex-end"
};

function Navbar(props) {
  return (
    <nav className="navbar" style={{ ...style, color: "white" }}>
      <h1>{props.orgName}</h1>
    </nav>
  );
}

export default Navbar;
