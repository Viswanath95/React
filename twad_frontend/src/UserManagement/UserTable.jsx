import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import PopUp from "./PopUp";
import UserTableStyles from "./UserTable.module.css";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";

function UserTable({ hover = true }) {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [perPage, setperPage] = useState(10);
  const [currentPage, setcurrentPage] = useState(1);
  const [endPage, setendPage] = useState(0);
  const [btnPopup, setbtnPopup] = useState(false);
  const [passId, setpassId] = useState(0);

  let token = sessionStorage.getItem("Token");

  let config = {
    Authorization: `${token}`,
  };

  useEffect(() => {
    nextPage(currentPage, perPage, searchTerm);
  }, []);

  const nextPage = (pageNumber, perPage, searchTerm) => {
    axios
      .get(
        `${process.env.REACT_APP_DATATABLE_URL}/${pageNumber}/${perPage}?searchKeyword=${searchTerm}`,
        { headers: config }
      )
      .then((response) => {
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

  const deleteRow = (index, e) => {
    window.location.reload(false);

    axios
      .post(
        `${process.env.REACT_APP_DELETE_ROW}?userId=${index}`,
        " ",
        { headers: config }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(
          "Failed to retrieve id:" + JSON.parse(JSON.stringify(error))
        );
      });
  };

  const searchInput = useMemo(
    () => nextPage(currentPage, perPage, searchTerm),
    [searchTerm]
  );

  const reRender = (e) => {
    setsearchTerm(e.target.value);
  };

  const newUser = () => {
    navigate("/dashboard/userform");
  };

  const confirmDelete = (id, e) => {
    setbtnPopup(true);
    setpassId(id);
  };

  const tableHeader = [
    { header: "firstname" },
    { header: "lastname" },
    { header: "username" },
    { header: "email" },
    { header: "mobile1" },
    { header: "mobile2" },
    { header: "roles" },
    { header: "departments" },
    { header: "action" },
  ];

  return (
    <div className={UserTableStyles.user}>
      <h1 className={UserTableStyles.title}>UserManagement</h1>
      <button className={UserTableStyles.adduser} onClick={newUser}>
        Add User
      </button>
      <input
        type="text"
        placeholder="Search"
        className={UserTableStyles.searchinput}
        value={searchTerm}
        onChange={reRender}
      />
      {searchInput}
      <div className={UserTableStyles.inputicons}>
        <i>
          <BsIcons.BsSortUp />
        </i>
        <input type="text" placeholder="Sort: Company ID" />
        <i>
          <BiIcons.BiChevronDown />
        </i>
      </div>
      <table className={UserTableStyles.tablecontent}>
        <thead>
          <tr>
            {tableHeader && tableHeader.map((head) => <th>{head.header}</th>)}
          </tr>
        </thead>
        <tbody>
        {data &&
            data.map((item) => {
              return (
                <tr key={item.id} className={`${hover && UserTableStyles.hover}`}>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile1}</td>
                  <td>{item.mobile2}</td>
                  <td>
                    {item.roles.map((roleData) => {
                      return(
                        <td>
                        {roleData.replace(/^"|"$/g, "")}
                        </td>
                      );
                    })}
                  </td>
                  <td>
                    {item.departments.map((departmentData) => {
                      return (
                        <td>
                          {departmentData.replace(/^"|"$/g, "")}
                        </td>
                      );
                    })}
                  </td>
                  <td>
                    <GrIcons.GrEdit />
                    <span>
                      <button onClick={(e) => confirmDelete(item.id, e)}>
                        <AiIcons.AiTwotoneDelete />
                      </button>
                    </span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <PopUp
        trigger={btnPopup}
        deleteRow={deleteRow}
        passId={passId}
        setTrigger={setbtnPopup}
      ></PopUp>
      <Pagination
        currentPage={currentPage}
        nextPage={nextPage}
        perPage={perPage}
        searchTerm={searchTerm}
        endPage={endPage}
      />
    </div>
  );
}

export default UserTable;
