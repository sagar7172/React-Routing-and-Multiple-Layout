import React, { Component } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

class FullLayout extends Component
{
    constructor(props)
    {
        super(props);
    }

    render(){
        return (
            <React.Fragment>
                <Header />
                <div className="MainPage">
                    <Sidebar />
                    <div className="width100per">
                        <div className="MiddlePage">
                            {this.props.children}
                        </div>
                        <Footer />
                    </div>
                </div>
                
            </React.Fragment>
            )
    }
}

export default FullLayout