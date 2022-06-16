import React from 'react';
import Navbar from '../Navbar/Navbar';

function Dashboard({ children }) {
    return(
        <div className="Dashboard">
            <Navbar />
            { children }
        </div>
    )
}

export default Dashboard;
