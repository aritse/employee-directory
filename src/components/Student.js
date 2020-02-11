import React from "react";

function Student(props) {
  return (
    <tr>
      <td>{props.student.name.first}</td>
      <td>{props.student.name.last}</td>
      <td>{props.student.location.city}</td>
      <td>{props.student.email}</td>
      <td>{props.student.phone}</td>
      <td>{props.student.dob.date.split("T")[0]}</td>
    </tr>
  );
}

export default Student;
