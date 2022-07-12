import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";
import "./SchemeCreation.css";
import {
  schemeType,
  categoryofScheme,
  subcategoryofScheme,
  region,
  circle,
  divisions,
} from "./CreateData";

function SchemeCreation() {
  const [schemeData, setschemeData] = useState({schemename: ''})
    const changeHandler = (e) => {
        setschemeData({ ...schemeData, [e.target.name]: e.target.value });
    };

  const [divisionState, setdivisionState] = useState({ selectedOption: null });

  const handledivisionChange = (selectedOption) => {
    setdivisionState({ selectedOption });
  };

  let token = sessionStorage.getItem("Token");

  let postData = {
    SchemeName: "Viswa",
    SchemeType: 2,
    SchemeCategory: 1,
    SubCategoryScheme: 1,
    Region: 2,
    Circle: 1,
    Num_of_habitation: 2,
    DPRSubmission: null,
    NeedForScheme: 2,
    NeedForInitiation: "order",
    Notes: "investigate",
    RefTables: [
      {
        TableName: "Divisions",
        selections: [1, 2],
      },
      {
        TableName: "Urban Beneficiary",
        selections: [1, 2],
      },
      {
        TableName: "Block",
        selections: [1, 2],
      },
      {
        TableName: "Other Beneficiary",
        selections: [1, 2],
      },
    ],
  };

  let header = {
    Authorization: `${token}`,
  };

  const schemeOutput = (e) => {
    e.preventDefault();
    axios
      .post("http://192.168.5.21:8080/api/v1/CreateScheme", postData, {
        headers: header,
      })
      .then((res) => {
        console.log("Got Response: ", res);
      })
      .catch((err) => {
        console.log("axios error: ", err);
      });
  };

  return (
    <body>
      <div className="container">
        <form>
          <header>Scheme Creation</header>
           <div className="first-form">
              <div className="fields">
                <div className="input-field">
                  <label htmlFor="name">Scheme Name:</label>
                  <input type="text" id="name" placeholder="Enter scheme name" value={schemeData.schemename} 
                  onChange={changeHandler} />
                </div>
                <div className="input-field">
                  <label>Scheme Type:</label>
                  <Select options={schemeType} />
                </div>
                <div className="input-field">
                  <label>Category of Scheme:</label>
                  <Select options={categoryofScheme} />
                </div>
                <div className="input-field">
                  <label>Sub-Category of Scheme:</label>
                  <Select options={subcategoryofScheme} />
                </div>
                <div className="input-field">
                  <label>Region:</label>
                  <Select options={region} />
                </div>
                <div className="input-field">
                  <label>Circle:</label>
                  <Select options={circle} />
                </div>
                <div className="input-field">
                  <label>Division(s):</label>
                  <Select
                    isMulti={true}
                    value={divisionState.selectedOption}
                    onChange={handledivisionChange}
                    options={divisions}
                  />
                </div>
                <button onClick={schemeOutput}>Submit</button>
              </div>
            </div>
            </form>
        </div>
      </body>
    );
}

export default SchemeCreation;
