import React from "react";
import "../styles/Thumb.css";
import Dropdown from "./Dropdown";
const Code = {
  Alabama: "AL",
  Alaska: "AK",
  Arizona: "AZ",
  Arkansas: "AR",
  California: "CA",
  Colorado: "CO",
  Connecticut: "CT",
  Delaware: "DE",
  Florida: "FL",
  Georgia: "GA",
  Hawaii: "HI",
  Idaho: "ID",
  Illinois: "IL",
  Indiana: "IN",
  Iowa: "IA",
  Kansas: "KS",
  Kentucky: "KY",
  Louisiana: "LA",
  Maine: "ME",
  Maryland: "MD",
  Massachusetts: "MA",
  Michigan: "MI",
  Minnesota: "MN",
  Mississippi: "MS",
  Missouri: "MO",
  Montana: "MT",
  Nebraska: "NE",
  Nevada: "NV",
  "New Hampshire": "NH",
  "New Jersey": "NJ",
  "New Mexico": "NM",
  "New York": "NY",
  "North Carolina": "NC",
  "North Dakota": "ND",
  Ohio: "OH",
  Oklahoma: "OK",
  Oregon: "OR",
  Pennsylvania: "PA",
  "Rhode Island": "RI",
  "South Carolina": "SC",
  "South Dakota": "SD",
  Tennessee: "TN",
  Texas: "TX",
  Utah: "UT",
  Vermont: "VT",
  Virginia: "VA",
  Washington: "WA",
  "West Virginia": "WV",
  Wisconsin: "WI",
  Wyoming: "WY"
};

const style = {
  textAlign: "center",
  backgroundColor: "#6a1b9a",
  color: "white"
};

function TableHeader(props) {
  return (
    <tr>
      <th>
        <button id="first" className="btn btn-primary  th-button" onClick={props.sortBy}>
          {props.columns[0]}
        </button>
      </th>
      <th>
        <button id="last" className="btn btn-primary  th-button" onClick={props.sortBy}>
          {props.columns[1]}
        </button>
      </th>
      <th style={style}>{props.columns[2]}</th>
      <th style={style}>
        <Dropdown filterByState={props.filterByState} options={Code} name={props.columns[3]} />
      </th>
      <th style={style}>{props.columns[4]}</th>
      <th style={style}>{props.columns[5]}</th>
      <th style={style}>{props.columns[6]}</th>
    </tr>
  );
}

export default TableHeader;
