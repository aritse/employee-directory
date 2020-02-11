import React from "react";

function Student(props) {
  return (
    <tr>
      <td>{props.student.firstName}</td>
      <td>{props.student.lastName}</td>
      <td>{props.student.emailAddress}</td>
      <td>{props.student.phoneNumber}</td>
    </tr>
  );
}

export default Student;
