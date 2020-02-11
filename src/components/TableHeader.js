import React from "react";

function TableHeader(props) {
  return (
    <tr>
      <th>
        <button id="firstName" className="btn btn-primary" onClick={props.sortStudents}>
          {props.columns[0]}
        </button>
      </th>
      <th>
        <button id="lastName" className="btn btn-primary" onClick={props.sortStudents}>
          {props.columns[1]}
        </button>
      </th>
      <th>
        <button id="city" className="btn btn-primary" onClick={props.sortStudents}>
          {props.columns[2]}
        </button>
      </th>
      <th>{props.columns[3]}</th>
      <th>{props.columns[4]}</th>
      <th>
        <button id="dob" className="btn btn-primary" onClick={props.sortStudents}>
          {props.columns[5]}
        </button>
      </th>
    </tr>
  );
}

export default TableHeader;
