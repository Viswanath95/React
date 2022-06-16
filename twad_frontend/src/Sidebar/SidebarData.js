import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        id: 1,
        title: 'Home',
        path: 'home',
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text'
    },
    {
        id: 2,
        title: 'Reports',
        path: 'reports',
        icon: <IoIcons.IoIosPaper />,
        className: 'nav-text'
    },
    {
        id: 3,
        title: 'Products',
        path: 'products',
        icon: <FaIcons.FaCartPlus />,
        className: 'nav-text'
    },
    {
        id: 4,
        title: 'Team',
        path: 'team',
        icon: <IoIcons.IoMdPeople />,
        className: 'nav-text'
    },
    {
        id: 5,
        title: 'Messages',
        path: 'messages',
        icon: <FaIcons.FaEnvelopeOpenText />,
        className: 'nav-text'
    },
    {
        id: 6,
        title: 'Support',
        path: 'support',
        icon: <IoIcons.IoMdHelpCircle />,
        className: 'nav-text'
    },
]
