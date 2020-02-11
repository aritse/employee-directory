import React from "react";

function TableHeader(props) {
  return (
    <tr>
      <th>
        <button className="btn btn-primary" onSubmit={props.sortStudents}>
          {props.columns[0]}
        </button>{" "}
      </th>
      <th>
        <button className="btn btn-primary" onClick={props.sortStudents}>
          {props.columns[1]}
        </button>{" "}
      </th>
      <th>{props.columns[2]}</th>
      <th>{props.columns[3]}</th>
    </tr>
  );
}

export default TableHeader;
