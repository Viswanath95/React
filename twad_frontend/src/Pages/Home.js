import React from 'react';
import { Outlet } from 'react-router-dom';

function Home() {
    return(
        <div className="home">
            <h5>Home</h5>
            <Outlet />
        </div>
    )
}

export default Home;