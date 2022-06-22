import React, { useState, useEffect } from 'react';
import axios from "axios";
import './UserTable.css';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';

function UserTable({ hover = true }) {
    const [data, setData] = useState([]);
   
    useEffect(() => {
        getApiData();
    }, [data])

    const getApiData = () => {
        axios
            .get("http://192.168.5.21:8080/api/v1/getALLUsers")
            .then((response) => {
                //console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.log('Failed to retrieve data:' + error)
            })
    }

    const tableHeader = [
        { header: "departmentID" },
        { header: "firstname" },
        { header: "middlename" },
        { header: "lastname" },
        { header: "mobile1" },
        { header: "mobile2" },
        { header: "email" },
    ]
    return (
        <div className="user">
            <h1 className="title">UserManagement</h1>
            <button className="add-user">Add User</button>
            <input type="text" placeholder="Search" className="search-input" />
            <div className="input-icons">
                <i><BsIcons.BsSortUp /></i>
                <input type="text" placeholder="Sort: Company ID" />
                <i><BiIcons.BiChevronDown /></i>
            </div>
            <table>
                <thead>
                    <tr>
                        {tableHeader &&
                            tableHeader.map((head) => (
                                <th>
                                    {head.header}
                                </th>
                            ))}
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map((show, i) => (
                            <tr key={i} className={`${hover && "hover"}`}>
                                <td>{show.departmentID}</td>
                                <td>{show.firstname}</td>
                                <td>{show.middlename}</td>
                                <td>{show.lastname}</td>
                                <td>{show.mobile1}</td>
                                <td>{show.mobile2}</td>
                                <td>{show.email}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserTable;

