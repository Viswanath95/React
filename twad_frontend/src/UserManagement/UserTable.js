import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { usePopper } from 'react-popper';
import './UserTable.css';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';

function UserTable({ hover = true }) {

    let navigate = useNavigate();
    const [data, setData] = useState([]);
    const [searchTerm, setsearchTerm] = useState('');
    const [popupMenu, setpopupMenu] = useState(false);
    let [referenceElement, setreferenceElement] = useState();
    let [popperElement, setpopperElement] = useState();
    let { styles, attributes } = usePopper(referenceElement, popperElement, { placement: "bottom-end"});

    useEffect(() => {
        getApiData();
    })

    const getApiData = () => {
        axios
            .get("http://192.168.5.21:8080/api/v1/getALLUsers/0/7")//here '0' is a page number and '7' is a data count
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
        { header: "action"},
    ]

    const menu = () => {
        console.log("Pop-up-menu is working");
        setpopupMenu(!popupMenu)
    }

    const edit = () => {
        navigate("/");
    }

    const hide = () => {
        navigate("/");
    }

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
                            <tr key={i} className={`${hover && "hover"}`}>
                                <td>{show.departmentID}</td>
                                <td>{show.firstname}</td>
                                <td>{show.middlename}</td>
                                <td>{show.lastname}</td>
                                <td>{show.mobile1}</td>
                                <td>{show.mobile2}</td>
                                <td>{show.email}</td>
                                <td>
                                    <div ref={setreferenceElement}>
                                    <button onClick={menu}>
                                        <BsIcons.BsThreeDotsVertical />
                                    </button>
                                    <div ref={setpopperElement} style={styles.popper} {...attributes.popper}>
                                    <button onClick={edit}><AiIcons.AiFillEdit /><span>Edit</span></button>
                                    <button onClick={hide}><AiIcons.AiFillDelete /><span>Delete</span></button>
                                    </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserTable;