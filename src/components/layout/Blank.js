import React, { Component } from "react";

class Blank extends Component
{
    constructor(props)
    {
        super(props);
    }

    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Blank