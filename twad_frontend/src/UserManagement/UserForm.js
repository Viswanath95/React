import React, { useState } from "react";
import "./UserForm.css";
import Select from "react-select";

function UserForm() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [alternateMobile, setAlternate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const Countryname = [
    {
      value: 1,
      label: "India",
    },
    {
      value: 2,
      label: "Russia",
    },
    {
      value: 3,
      label: "Iceland",
    },
    {
      value: 4,
      label: "Turkey",
    },
  ];

  const [Displayvalue, getvalue] = useState("None");
  const Departmenthandle = (e) => {
    getvalue(Array.isArray(e) ? e.map((x) => x.label) : []);
  };

  const [role, setRole] = useState("None");
  const Rolehandle = (e) => {
    setRole(Array.isArray(e) ? e.map((x) => x.label) : []);
  };

  const handlesetNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleAlternateChange = (e) => {
    setAlternate(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    if (password !== confPassword) {
      alert("password Not Match");
    } else {
      console.log(
        'A form was submitted with Name :"' +
          name +
          '" and Mobile :"' +
          mobile +
          '" and Alternate Mobile :"' +
          alternateMobile +
          '" and Email :"' +
          email +
          '" and Department :"' +
          Displayvalue +
          '" and Role :"' +
          role
      );
    }
    e.preventDefault();
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      borderRadius: "6px",
      boxShadow: state.isFocused && "0 0 10px #719ece83",
      borderColor: "rgba(255, 255, 255, 0.205)",
      backgroundColor: "rgba(199, 199, 199, 0.171)",
      border: "none",
      // You can also use state.isFocused to conditionally style based on the focus state
    }),
  };

  return (
    <div className="App">
      <header className="App-header">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h2> Registration Form </h2>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your First Name"
            pattern="^[A-Za-z0-9]{3,16}$"
            value={name}
            required="true"
            errormessage="Username should be 3-16 characters and shouldn't include any special character!"
            onChange={(e) => {
              handlesetNameChange(e);
            }}
          />
          <br />

          <label>Mobile Number</label>
          <input
            type="text"
            placeholder="Enter your Mobile Number"
            pattern="^[A-Za-z0-9]{3,16}$"
            value={mobile}
            required="true"
            errormessage="Username should be 3-16 characters and shouldn't include any special character!"
            onChange={(e) => {
              handleMobileChange(e);
            }}
          />
          <br />

          <label>Alternate Mobile Number</label>
          <input
            type="text"
            placeholder="Enter your Alternate Mobile Number"
            pattern="^[A-Za-z0-9]{3,16}$"
            value={alternateMobile}
            required="true"
            errormessage="Username should be 3-16 characters and shouldn't include any special character!"
            onChange={(e) => {
              handleAlternateChange(e);
            }}
          />
          <br />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            required
            onChange={(e) => {
              handleEmailChange(e);
            }}
          />
          <br />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            required
            onChange={(e) => {
              handlePasswordChange(e);
            }}
          />
          <br />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Re-enter your Password"
            value={confPassword}
            required
            onChange={(e) => {
              handleConfPasswordChange(e);
            }}
          />
          <br />

          <label>Department ID</label>
          <span>
            <div
              style={{
                width: "400px",
                fontSize: "12px",
                marginTop: "10px",
                marginBottom: "10px",
                marginLeft: "20px",
              }}
            >
              <Select
                styles={customStyles}
                isMulti
                options={Countryname}
                onChange={Departmenthandle}
              ></Select>
            </div>
          </span>

          <label>Role ID</label>
          <span>
            <div
              style={{
                width: "400px",
                fontSize: "12px",
                marginTop: "10px",
                marginBottom: "10px",
                marginLeft: "20px",
              }}
            >
              <Select
                styles={customStyles}
                isMulti
                options={Countryname}
                onChange={Rolehandle}
              ></Select>
            </div>
          </span>

          <input className="btn" type="submit" value="Add User" />
        </form>
      </header>
    </div>
  );
}

export default UserForm;
