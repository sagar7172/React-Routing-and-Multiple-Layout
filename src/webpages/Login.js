import React, { Component } from "react";
import { useHistory } from "react-router-dom";
class Login extends Component
{
    constructor()
    {
        super();

        this.state= {
            username: '',
            password: '',
        }
    }

    submitForm = (event) =>
    {
        console.log(this.state);
        event.preventDefault()
        if (this.state.username === "admin" || this.state.password === "admin")
        {
            let path = "/home"; 
            this.props.history.push(path);
        }
        else
        {
            alert("Please enter valid credentials");
        }
    }

    usernameHandler = (event) => {
        this.setState({
            username: event.target.value,
        })
    }

    passwordHandler = (event) => {
        this.setState({
            password: event.target.value,
        })
    }

    render(){
        const {username,password } = this.state
        return (
            <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-4">
                            <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                                <div className="card-body p-5 text-center">
    
                                    <h3 className="mb-5">Sign in</h3>
    
                                    <div className="form-outline mb-4">
                                        <input type="email" id="typeEmailX" className="form-control form-control-lg" 
                                        value={username} onChange={this.usernameHandler}
                                        placeholder="Email" />
                                    </div>
    
                                    <div className="form-outline mb-4">
                                        <input type="password" id="typePasswordX" className="form-control form-control-lg" 
                                        value={password} onChange={this.passwordHandler}
                                        placeholder="Password" />
                                     </div>
    
                                    <div className="form-check d-flex justify-content-start mb-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="form1Example3"
                                        />
                                        <label style={{marginLeft:"7px"}} className="form-check-label" for="form1Example3"> Remember password </label>
                                    </div>
    
                                    <button style={{minWidth: "300px"}} className="btn btn-primary btn-lg btn-block" 
                                    onClick={this.submitForm}>Login</button>
    
                                    <hr className="my-4" />
    
                                    <button className="btn btn-lg btn-block btn-danger mb-2" style={{ backgroundColor: "#dd4b39", minWidth: "300px" }} type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>
                                    <button className="btn btn-lg btn-block btn-primary mb-2" style={{ backgroundColor: "#3b5998", minWidth: "300px" }} type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button>
    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Login