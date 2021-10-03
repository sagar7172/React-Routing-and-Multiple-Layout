import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DashboardIcon from '@mui/icons-material/Dashboard';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home"
    },
    {
        title: "About",
        icon: <MailOutlineIcon />,
        // link: "/about/:name"
        link: "/about"
    },
    {
        title: "Project",
        icon: <AssessmentIcon />,
        link: "/project"
    },
    {
        title: "Contact",
        icon: <DashboardIcon />,
        link: "/contact"
    }
]