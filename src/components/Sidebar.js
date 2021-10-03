import React from "react";
import "../App.css";
import {SidebarData} from "./SidebarData"
import { Link } from 'react-router-dom'
import {useLocation} from 'react-router-dom'

function Sidebar(){
    let location = useLocation();
    console.log(location);
    return(
        <div className="Sidebar">   
                <ul>
                {
                    SidebarData.map((val, key)=> {
                        return <li key={key} id={location.pathname === val.link ? "active" : ""}>
                            <Link to={val.link}>
                            <div className="sideNavicon">{val.icon}</div>
                            <div>{val.title}</div>
                            </Link></li>
                    })
                }
                </ul>
        </div>
    )
}

export default Sidebar