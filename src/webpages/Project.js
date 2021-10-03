import React from "react";
import {useHistory} from 'react-router-dom'

function Project()
{
    let history = useHistory();

    return( 
    <div className="card">
        <div className="card-body">
            <h1>I am project page</h1>
            <button className="btn btn-primary width200" onClick={()=> {history.push('/about')}}>Go To About Page</button>
        </div>
    </div>
    )
}

export default Project