import React from 'react';
import Data from "../Table/Data";
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import "../Table/Table.css";

function HomeOne({ hover = true }) {
    const columns = [
        {field: "select", header: <BiIcons.BiCheckbox /> },
        {field: "cusName", header: "Customer Name" },
        {field: "companyName", header: "Company" },
        {field: "phoneNo", header: "Phone Number" },
        {field: "emailAddress", header: "Email Address" },
        {field: "panNo", header: "PAN" },
        {field: "gstIn", header: "GSTIN" },
        {field: "action", header: <BsIcons.BsThreeDotsVertical /> },
    ]
    return(
        <div className="table">
            <div className="title">
                <h1>Table-Content</h1>
            </div>
            <div className="customer-button">
            <button>Add Customer</button>
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
                    {Data &&
                        Data.map((row) => (
                        <tr className={`${hover && "hover"}`}>
                            {columns.map((col) => (
                                <td>{row[col.field]}</td>
                            ))}
                        </tr>
                        ))}
                </tbody>
            </table>
            {Data ? null : <h5>No data</h5> }
        </div>
    )
}

export default HomeOne; 