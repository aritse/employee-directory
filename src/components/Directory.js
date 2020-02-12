import React from "react";
import "../styles/Table.css";
import Student from "./Student";
import TableHeader from "./TableHeader";

class Directory extends React.Component {
  state = {
    sortBy: "first",
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

  customSort = students => {
    if (this.state.sortBy === "first")
      if (this.state.order) students.sort((a, b) => (a.name.first > b.name.first ? 1 : -1));
      else students.sort((a, b) => (a.name.first > b.name.first ? -1 : 1));
    if (this.state.sortBy === "last")
      if (this.state.order) students.sort((a, b) => (a.name.last > b.name.last ? 1 : -1));
      else students.sort((a, b) => (a.name.last > b.name.last ? -1 : 1));
    if (this.state.sortBy === "dob")
      if (this.state.order) students.sort((a, b) => (a.dob > b.dob ? 1 : -1));
      else students.sort((a, b) => (a.dob > b.dob ? -1 : 1));

    return students;
  };

  sortBy = event => {
    const colName = event.target.id;
    if (colName === this.state.sortBy) this.setState({ order: !this.state.order });
    else this.setState({ sortBy: colName, order: 1 });
  };

  render() {
    return (
      <div className="container">
        <h2>Student Directory</h2>
        <div className="jumbotron">
          <table>
            <thead>
              <TableHeader order={this.order} sortBy={this.sortBy} columns={["First Name", "Last Name", "DoB", "Address", "Email", "Phone", "Photo"]} />
            </thead>
            <tbody>
              {this.customSort(this.state.students).map((info, id) => (
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
