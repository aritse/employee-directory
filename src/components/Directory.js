import React from "react";
import "../styles/Table.css";
import Student from "./Student";
import TableHeader from "./TableHeader";

class Directory extends React.Component {
  state = {
    sortBy: "firstName",
    order: 1,
    students: []
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=20&nat=us")
      .then(res => res.json())
      .then(data => {
        this.setState({ students: data.results });
      })
      .catch(console.log);
  }

  // customSort = () => {
  //   console.log("STUDENTS ARE", this.state.students);

  //   const students = [...this.state.students];
  //   if (this.state.sortBy === "firstName")
  //     return this.state.order ? students.sort((a, b) => (a.firstName > b.firstName ? 1 : -1)) : students.sort((a, b) => (a.firstName > b.firstName ? -1 : 1));
  //   else return this.state.order ? students.sort((a, b) => (a.lastName > b.lastName ? 1 : -1)) : students.sort((a, b) => (a.lastName > b.lastName ? -1 : 1));
  // };

  sortBy = event => {
    if (event.target.id === this.state.sortBy) {
      this.setState({ direction: !this.state.order });
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
              <TableHeader sortStudents={this.sortBy} columns={["First Name", "Last Name", "City", "Email", "Phone", "DoB"]} />
            </thead>
            <tbody>
              {console.log(this.state.students)}
              {this.state.students.map((info, id) => (
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
