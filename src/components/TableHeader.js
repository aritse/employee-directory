import React from "react";
import "../styles/Thumb.css";

const style = {
  textAlign: "center",
  backgroundColor: "#6a1b9a",
  color: "white"
};

function TableHeader(props) {
  return (
    <tr>
      <th>
        <button id="first" className="btn btn-primary  th-button" onClick={props.sortBy}>
          {props.columns[0]}
        </button>
      </th>
      <th>
        <button id="last" className="btn btn-primary  th-button" onClick={props.sortBy}>
          {props.columns[1]}
        </button>
      </th>
      <th style={style}>{props.columns[2]}</th>
      <th style={style}>{props.columns[3]}</th>
      <th style={style}>{props.columns[4]}</th>
      <th style={style}>{props.columns[5]}</th>
      <th style={style}>{props.columns[6]}</th>
    </tr>
  );
}

export default TableHeader;
