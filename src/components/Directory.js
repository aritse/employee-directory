import React from "react";
import "../styles/Table.css";
import Student from "./Student";
import TableHeader from "./TableHeader";

class Directory extends React.Component {
  state = {
    sortBy: "first",
    ascending: true,
    all: [],
    students: []
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=20&nat=us")
      .then(res => res.json())
      .then(data => {
        this.setState({ all: data.results, students: data.results });
      })
      .catch(console.log);
  }

  customSort = students => {
    if (this.state.sortBy === "first")
      if (this.state.ascending) students.sort((a, b) => (a.name.first > b.name.first ? 1 : -1));
      else students.sort((a, b) => (a.name.first > b.name.first ? -1 : 1));
    if (this.state.sortBy === "last")
      if (this.state.ascending) students.sort((a, b) => (a.name.last > b.name.last ? 1 : -1));
      else students.sort((a, b) => (a.name.last > b.name.last ? -1 : 1));
    if (this.state.sortBy === "dob")
      if (this.state.ascending) students.sort((a, b) => (a.dob > b.dob ? 1 : -1));
      else students.sort((a, b) => (a.dob > b.dob ? -1 : 1));

    return students;
  };

  sortBy = event => {
    const colName = event.target.id;
    if (colName === this.state.sortBy) this.setState({ ascending: !this.state.ascending });
    else this.setState({ sortBy: colName, ascending: true });
  };

  filterByState = state => {
    if (state === "All") {
      this.setState({ students: this.state.all });
    } else {
      this.setState({ students: this.state.all.filter(student => student.location.state === state) });
    }
  };

  render() {
    return (
      <div className="container">
        <h2>Student Directory</h2>
        <div className="jumbotron">
          <table>
            <thead>
              <TableHeader
                filterByState={this.filterByState}
                ascending={this.ascending}
                sortBy={this.sortBy}
                columns={["First Name", "Last Name", "DoB", "Address", "Email", "Phone", "Photo"]}
              />
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
