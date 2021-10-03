import React from "react";
import user from '../images/user.jpg';
import {useHistory} from 'react-router-dom'

function Header()
{
    let history = useHistory();
    return (
    <header>
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" style={{marginLeft:"10px"}}>IDEAL PROJECT</a>
            <div className="d-flex">
               
                <div class="dropdown">
                <div class="" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <div className="chip chip-md blue lighten-4">
                    <img src={user} alt="Sagar Sawant" /> Sagar Sawant
                </div>
                </div>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item"  onClick={()=> {history.push('/profile')}}>Profile</a></li>
                    <li><a class="dropdown-item"  onClick={()=> {history.push('/login')}}>Logout</a></li>
                </ul>
                </div>
            </div>
            
        </nav>
    </header>
    )
}

export default Header