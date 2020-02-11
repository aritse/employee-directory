import React from "react";
import "../styles/Table.css";
import Student from "./Student";
import students from "../students.json";
import TableHeader from "./TableHeader";

class Directory extends React.Component {
  state = {
    sortBy: "firstName",
    direction: 1
  };

  customSort = students => {
    if (this.state.sortBy === "firstName")
      return this.state.direction
        ? students.sort((a, b) => (a.firstName > b.firstName ? 1 : -1))
        : students.sort((a, b) => (a.firstName > b.firstName ? -1 : 1));
    else
      return this.state.direction ? students.sort((a, b) => (a.lastName > b.lastName ? 1 : -1)) : students.sort((a, b) => (a.lastName > b.lastName ? -1 : 1));
  };

  sortBy = event => {
    console.log("clicked:", event.target.id);
    if (event.target.id === this.state.sortBy) {
      this.setState({ direction: !this.state.direction });
    } else {
      this.setState({
        sortBy: event.target.id
      });
    }
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
              {this.customSort(students).map((info, id) => (
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
