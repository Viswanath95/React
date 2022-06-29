import React, { useState, useEffect } from 'react';
import axios from "axios";
//import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import './UserTable.css';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';

function UserTable({ hover = true, striped = true }) {
    //let navigate = useNavigate();
    const [data, setData] = useState([]);
    const [searchTerm, setsearchTerm] = useState('');
    const [perPage, setperPage] = useState(7);
    const [currentPage, setcurrentPage] = useState(0);
    const [totalPages, settotalPages] = useState({ totalPages: ''});
    
    useEffect(() => {

        nextPage(0, perPage)
        //eslint-disable-next-line react-hooks/exhaustive-deps

    }, [data.firstname])

    const nextPage = (pageNumber) => {
        axios
            .get(`http://192.168.5.25:8080/api/v1/getAllUserDetails/${pageNumber}/${perPage}`)
            .then((response) => {
               console.log(response.data);
               setcurrentPage(pageNumber);
               setperPage(perPage);
               console.log(totalPages);
               settotalPages(totalPages);
               setData(response.data);
            }, [])
            .catch((error) => {
                console.log('Failed to retrieve data:' + JSON.parse(JSON.stringify(error)))
            })
    }

    /*const totalpageNumber = () => {
        data.filter((val) => {
            if(val.totalPages !== '') {
                console.log(val.totalPages);
                settotalPages(val.totalPages);
            }
        })
    }*/

    const tableHeader = [
        { header: "id" },
        { header: "username" },
        { header: "email" },
        { header: "mobile1" },
        { header: "mobile2" },
        { header: "roles" },
        { header: "departments" },
        { header: "action"},
    ]

    /*const edit = () => {
        navigate("/");
    }

    const hide = () => {
        navigate("/");
    }*/

    return (
        <div className="user">
            <h1 className="title">UserManagement</h1>
            <button className="add-user">Add User</button>
            <input type="text" placeholder="Search" className="search-input" value={searchTerm} 
            onChange={(e) => {
                setsearchTerm(e.target.value);
            }}
            />
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
                    data.map((item, index) => {
                        return(
                            <tr key={index} className={`${hover && "hover"} ${striped && "striped"}`}>
                                <td>{item.id}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile1}</td>
                                <td>{item.mobile2}</td>
                                <td>
                                {
                                    item.roles.map((roleData, index) => {
                                        return(
                                            <tr>
                                            <td key={index}>{JSON.parse(roleData)}</td>
                                            </tr>
                                        )
                                    })
                                }
                                </td>
                                <td>
                                {
                                    item.departments.map((departmentData, index) => {
                                        return(
                                            <td key={index}>{JSON.parse(departmentData)}</td>
                                        )
                                    })
                                }
                                </td>
                                <td><BsIcons.BsThreeDotsVertical /></td>
                            </tr>
                        )
                    })
                  }
                </tbody>
            </table>
            <Pagination currentPage={currentPage} nextPage={nextPage} totalPages={totalPages} />
        </div>
    )
}

export default UserTable;