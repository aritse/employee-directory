import React from "react";
import "../styles/Table.css";
import Student from "./Student";
import students from "../students.json";
import TableHeader from "./TableHeader";

class Directory extends React.Component {
  state = {
    students: students,
    sortBy: "firstName"
  };

  // sort = () => {
  //   switch (this.state.sortBy) {
  //     case 0:
  //       this.state.students.sort((a, b) => (a.firstName > b.firstName ? 1 : -1));
  //       break;
  //     case 1:
  //       this.state.students.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));
  //       break;
  //     default:
  //       break;
  //   }
  // };

  sortBy = event => {
    this.setState({
      sortBy: event.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <h2>Student Directory</h2>
        <div className="jumbotron">
          <table>
            <thead>
              <TableHeader sortStudents={this.sortBy} columns={["First Name", "Last Name", "Email Address", "Phone Number"]} />
            </thead>
            <tbody>
              {this.state.students.sort().map((info, id) => (
                <Student key={id} student={info} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Directory;
