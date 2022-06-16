import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as TbIcons from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { SidebarData } from '../Sidebar/SidebarData';
import img from '../Images/logo.png';
import profile from '../Images/profile-icon.png';
import './Navbar.css';
import '../Sidebar/Sidebar.css';
import '../App.css';

function Navbar() {
    let navigate = useNavigate();
    const[sidebar, setSidebar] = useState(false);
    const[dropdown, setDropdown] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar)
    }

    const profileMenu = () => {
        setDropdown(!dropdown)
    }

    const logout = () => {
        navigate("/");
    }

    return(
        <>
        <div className="Navbar">
            <div className="leftSide">
            <Link to="#" className='menu-bars'>
                <button><FaIcons.FaBars onClick={showSidebar} /></button>
            </Link>
            <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
            <ul className='nav-menu-items'>
            {SidebarData.map((item, index) => {
                    return(
                        <div
                            onClick={ () =>  {
                                navigate(`/dashboard/${item.path}`)
                            }}
                        >
                        <li key={index} className={item.className}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                        </div>
                    )
                })}
            </ul>
        </nav>
            <div className="icon">
                <img src={img} alt="Raavan Technologies"/>
            </div>
            </div>
            <div className="rightSide">
                <div className="bell-icon"><button><TbIcons.TbBellRinging /></button></div>
                <button onClick={profileMenu}><img src={profile} alt="Profile icon"/></button>
                <nav className={dropdown ? 'profile-menu active': 'profile-menu' }>
                <ul className='profile-menu-items'>
                    <button onClick={logout}><AiIcons.AiOutlineLogout />Logout</button>
                </ul>
                </nav>
            </div>
        </div>
        </>
    )
}

export default Navbar;