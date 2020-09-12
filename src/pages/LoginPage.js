import React, {Component} from "react";
import { Link } from "react-router-dom";

//import Login css
import '../css/Login.css'

//import images components here
import logo from '../images/Logo.png';

class Login extends Component {

    render(){
        return(

                <div className="container">

                    {/* daiso logo */}
                    <div className="logo-wrapper">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>

                <form className="login form-container">

                    {/* username input */}
                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="Employee ID"/>
                    </div>

                    {/* password input */}
                    <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" />
                    </div>

                    {/* login button */}
                    <Link to = '/TaskPlannerPage'>
                    <button type="login" className="login-btn">LOGIN</button>
                    </Link>
                    </form>
                </div>
        );
    }
}
export default Login;