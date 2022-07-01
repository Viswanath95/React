import React, { useState } from 'react';
import Data from "../Table/Data";
import "../Table/Table.css";
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';

function HomeOne({ hover = true }) {
    const columns = [
        {field: "select", header: <input type="checkbox" /> },
        {field: "cusName", header: "Customer Name" },
        {field: "companyName", header: "Company" },
        {field: "phoneNo", header: "Phone Number" },
        {field: "emailAddress", header: "Email Address" },
        {field: "panNo", header: "PAN" },
        {field: "gstIn", header: "GSTIN" },
        {field: "action"},
    ]

    const[value, setValue] = useState('');
    const[dataSource, setDataSource] = useState(Data);
    const[tableFilter, setTableFilter] = useState([]);

    const filterData = (e) => {
        let userInput = e.target.value;
        if(userInput !== "") {
            setValue(userInput);
            const filterTable = dataSource.filter(o=>Object.keys(o).some(k=> 
                String(o[k]).toLowerCase().includes(userInput.toLowerCase())
                ));
                setTableFilter([...filterTable])
        }else {
            setValue(userInput);
            setDataSource([...dataSource])
        }
    }

    return(
        <div className="Table">
            <h1 className="title">Table-Content</h1>
            <button className="customer-button">Add Customer</button>
            <input type="text" placeholder="Search" className="search-input" value={value} 
            onChange={filterData} />
            <div className="input-icons">
            <i><BsIcons.BsSortUp/></i>
            <input type="text" placeholder="Sort: Company ID"/>
            <i><BiIcons.BiChevronDown/></i>
            </div>
            <table>
                <thead>
                    <tr>
                        {columns &&
                            columns.map((head) => (
                                <th>
                                    {head.header}
                                </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                {value.length > 0 ? tableFilter.map((row) => {
                    return(
                        <tr className={`${hover && "hover"}`}>
                            {columns.map((col) => (
                                <td>{row[col.field]}</td>
                            ))}
                        </tr>
                    )
                        })
                    :
                   dataSource.map((row) => {
                        return(
                            <tr className={`${hover && "hover"}`}>
                                {columns.map((col) => (
                                    <td>{row[col.field]}</td>
                                ))}
                            </tr>
                        )
                            })
                        }
                </tbody>
            </table>
        </div>
    )
}

export default HomeOne; 
