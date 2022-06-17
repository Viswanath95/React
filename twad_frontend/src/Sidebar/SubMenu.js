import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SubMenu({ item }) {
    //let navigate = useNavigate();
    const[subnav, setSubnav] = useState(false);

    const showSubnav = () => {
        setSubnav(!subnav)
    }
    return(
        <>
        <div>
            <Link to={item.path} className="sidebar-link" onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <span>{item.title}</span>
                </div>
                <div>
                    {item.subNav && subnav
                    ? item.iconOpened
                    : item.subNav
                    ? item.iconClosed
                    : null}
                </div>
            </Link>
            {subnav &&
                item.subNav.map((item, index) => {
                    return(
                        <div>
                        <Link to={item.pathname} key={index} className="dropdown-link">
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default SubMenu;