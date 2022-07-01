import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

function Dashboard() {
    return(
        <div className="Dashboard">
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Dashboard;
