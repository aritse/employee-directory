import React from "react";

function Dropdown(props) {
  return (
    <div>
      <select onChange={event => props.filterByState(event.target.value)}>
        <option value="All">All</option>
        {Object.keys(props.options).map((state, i) => (
          <option key={i} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
