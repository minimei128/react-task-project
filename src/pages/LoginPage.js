import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Axios from 'axios'

//import Login css
import '../css/Login.css'

//import images components here
import logo from '../images/Logo.png';

function Login() {

    const [employeeNumber, setEmployeeNumber] = useState('')
    const [password, setPassword] = useState('')
   
    const validateLogin = () => {
        Axios.post('http://localhost:3000/api/login', {
            employeeNumber: employeeNumber, 
            password: password,
    }).then(() => {
        alert("login successful");
    });
};

        return(

                <div className="container">

                    {/* daiso logo */}
                    <div className="logo-wrapper">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>

                <form className="login form-container">

                    {/* username input */}
                    <div className="form-group">
                        <input 
                        type="employeeID" 
                        className="form-control" 
                        name="employeeID" 
                        placeholder="Employee ID"
                        onChange={(e)=> {
                            setEmployeeNumber(e.target.value)
                        }}/>
                    </div>

                    {/* password input */}
                    <div className="form-group">
                    <input 
                    type="password" 
                    className="form-control" 
                    name="password" 
                    placeholder="Password"
                    onChange={(e)=> {
                        setPassword(e.target.value)
                    }} />
                    </div>

                    {/* login button */}
                    
                    <button 
                    type="login" 
                    className="login-btn"
                    onClick={validateLogin}>LOGIN</button>
                    {/* <Link to = '/TaskPlannerPage'></Link> */}
                    </form>
                </div>
        );
}
export default Login;