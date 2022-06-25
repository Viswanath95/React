import React, { useState, useEffect } from 'react';
import axios from "axios";
import Pagination from './Pagination';
import PopUp from './PopUp';
import './PopUp.css';
//import { useNavigate } from 'react-router-dom';
//import { usePopper } from 'react-popper';
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
    const [isOpen, setisOpen] = useState(false);
    /*let [referenceElement, setreferenceElement] = useState();
    let [popperElement, setpopperElement] = useState();
    let { styles, attributes } = usePopper(referenceElement, popperElement, { placement: "bottom-end"});*/

    useEffect(() => {

        nextPage(0, perPage)
        //eslint-disable-next-line react-hooks/exhaustive-deps

    }, [data.firstname])

    const nextPage = (pageNumber) => {
        axios
            .get(`http://192.168.5.21:8080/api/v1/getALLUsers/${pageNumber}/${perPage}`)
            .then((response) => {
                //console.log(response.data);
               setcurrentPage(pageNumber);
               setperPage(perPage);
               setData(response.data);
            }, [])
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
        { header: "action"},
    ]

    const popupMenu = () => {
        //  console.log("Pop-up-menu is working");
        setisOpen(!isOpen)
    }

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
                        data.filter((val) => {
                            if(searchTerm === '') {
                                return val;
                            }else if(
                                val.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                val.middlename.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                val.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                val.email.toLowerCase().includes(searchTerm.toLowerCase())
                            ){
                                return val;
                            }
                        })
                       .map((show, i) => (
                            <tr key={i} className={`${hover && "hover"} ${striped && "striped"}`}>
                                <td>{show.departmentID}</td>
                                <td>{show.firstname}</td>
                                <td>{show.middlename}</td>
                                <td>{show.lastname}</td>
                                <td>{show.mobile1}</td>
                                <td>{show.mobile2}</td>
                                <td>{show.email}</td>
                                <td>
                                    <>
                                    <button onClick={popupMenu}>
                                        <BsIcons.BsThreeDotsVertical />
                                    </button>
                                    {
                                    isOpen && <PopUp 
                                    header= {
                                        <>
                                       <AiIcons.AiFillEdit /><span>Edit</span>
                                       <AiIcons.AiFillDelete /><span>Delete</span>
                                    </>}
                                    />}
                                </>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <Pagination currentPage={currentPage} nextPage={nextPage} />
        </div>
    )
}

export default UserTable;