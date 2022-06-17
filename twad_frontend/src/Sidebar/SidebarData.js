import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Home',
        path: 'home',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        className: 'nav-text',

        subNav: [
            {
                id: 1,
                title: 'Homeone',
                pathname: 'home/homeone',
                icon: <AiIcons.AiFillHome />
            },
            {
                id: 2,
                title: 'Hometwo',
                pathname: 'home/hometwo',
                icon: <AiIcons.AiFillHome />
            },
            {
                id: 3,
                title: 'Homethree',
                pathname: 'home/homethree',
                icon: <AiIcons.AiFillHome />
            },
            {
                id: 4,
                title: 'Homefour',
                pathname: 'home/homefour',
                icon: <AiIcons.AiFillHome />
            }
        ]
    },
    {
        title: 'Reports',
        path: 'reports',
        icon: <IoIcons.IoIosPaper />,
        className: 'nav-text'
    },
    {
        title: 'Products',
        path: 'products',
        icon: <FaIcons.FaCartPlus />,
        className: 'nav-text'
    },
    {
        title: 'Team',
        path: 'team',
        icon: <IoIcons.IoMdPeople />,
        className: 'nav-text'
    },
    {
        title: 'Messages',
        path: 'messages',
        icon: <FaIcons.FaEnvelopeOpenText />,
        className: 'nav-text'
    },
    {
        title: 'Support',
        path: 'support',
        icon: <IoIcons.IoMdHelpCircle />,
        className: 'nav-text'
    },
]
