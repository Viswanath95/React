import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import "./UserTable.css";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";

function UserTable({ hover = true, striped = true }) {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [perPage, setperPage] = useState(7);
  const [currentPage, setcurrentPage] = useState(1);
  const [endPage, setendPage] = useState(0);
  

  let token = sessionStorage.getItem("Token");

  let config = {
    Authorization: `${token}`,
  };

  useEffect(() => {

    nextPage();
    
  }, []);

  const nextPage = (pageNumber, searchTerm) => {
    axios
      .get(
        `http://192.168.5.37:8080/api/v1/getAllUserDetails/${pageNumber}/${perPage}`,
        { params: { searchKeyword: searchTerm }, headers: config }
      )
      .then(
        (response) => {
          console.log(response.data);
          setendPage(response.data.intValue);
          setcurrentPage(pageNumber);
          setperPage(perPage);
          setData(response.data.commonList);
        })
      .catch((error) => {
        console.log(
          "Failed to retrieve data:" + JSON.parse(JSON.stringify(error))
        );
      });
  };

  const searchInput = useMemo(
    () => nextPage(1, searchTerm),
    [searchTerm]
  );

  const newUser = () => {
    navigate("/dashboard/userform");
  };

  const tableHeader = [
    { header: "username" },
    { header: "email" },
    { header: "mobile1" },
    { header: "mobile2" },
    { header: "roles" },
    { header: "departments" },
    { header: "action" },
  ];

  return (
    <div className="user">
      <h1 className="title">UserManagement</h1>
      <button className="add-user" onClick={newUser}>
        Add User
      </button>
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        value={searchTerm}
        onChange={(e) => {
          setsearchTerm(e.target.value);
        }}
      />
      {searchInput}
      <div className="input-icons">
        <i>
          <BsIcons.BsSortUp />
        </i>
        <input type="text" placeholder="Sort: Company ID" />
        <i>
          <BiIcons.BiChevronDown />
        </i>
      </div>
      <table>
        <thead>
          <tr>
            {tableHeader && tableHeader.map((head) => <th>{head.header}</th>)}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr
                  key={index}
                  className={`${hover && "hover"} ${striped && "striped"}`}
                >
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile1}</td>
                  <td>{item.mobile2}</td>
                  <td>
                    {item.roles.map((roleData, index) => {
                      return <td key={index}>{roleData}</td>;
                    })}
                  </td>
                  <td>
                    {item.departments.map((departmentData, index) => {
                      return <td key={index}>{departmentData}</td>;
                    })}
                  </td>
                  <td>
                    <GrIcons.GrEdit />
                    <span>
                      <AiIcons.AiTwotoneDelete />
                    </span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        nextPage={nextPage}
        endPage={endPage}
      />
    </div>
  );
}

export default UserTable;
