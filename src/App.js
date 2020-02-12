import React from "react";
import Navbar from "./components/Navbar";
import Directory from "./components/Directory";

function App() {
  return (
    <div>
      <Navbar orgName="Bootcamp (University of Washington )" />
      <Directory />
    </div>
  );
}

export default App;
