import React from "react";
import {useParams} from 'react-router-dom'

function Profile()
{
    // let {name} = useParams();
    // return <div><h1>I am about page. You are {name}</h1></div>
    return (
        <div className="card">
        <div className="card-body">
            <h1>I am Profile page</h1>
        </div>
        </div>
        )
}

export default Profile