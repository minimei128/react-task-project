import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

//import Employee css
import '../css/Employee.css'

//import SideMenu css
import '../css/SideMenu.css'

//import images components here
import planner_icon from '../icons/Planner.png';
import settings_icon from '../icons/Settings.png';
import employees_icon from '../icons/Employees.png';
import logout_icon from '../icons/Logout.png';

function Employee () {

        // const [employeeID, setEmployeeID] = useState[""];
        const [employeeNumber, setEmployeeNumber] = useState("");
        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [positionTitle, setPositionTitle] = useState("");

        const addEmployee = () => {
            Axios.post("http://localhost:3001/api/gets/addEmployee");
        };
    
        return(

                <div className="container">

                {/* SideMenu Bar */}
                <div className="sidenav"> 

                <div className="sidebar-item">
                    <img src={planner_icon} className="App-logo" alt="icon" />
                    <Link to = '/TaskPlannerPage' className="nav-link">Task Planner</Link>
                </div>

                <div className="sidebar-item">
                    <img src={employees_icon} className="App-logo" alt="icon" />
                    <Link to = '/EmployeePage' className="nav-link active">Employee</Link>
                </div>
    
                <div className="sidebar-item">
                    <img src={settings_icon} className="App-logo" alt="icon" />
                    <Link to = '/SettingPage' className="nav-link">Account Settings</Link>
                </div>

                <div className="sidebar-item">
                    <img src={logout_icon} className="App-logo" alt="icon" />
                        <Link to = '/' className="nav-link">Logout</Link>
                    </div>

                </div>

<div className="main-view-container">
           {/* Display table */}
            <div className="left-side-wrapper">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Employee Number</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Position</th>
                        </tr>
                       </thead>
  
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>20327</td>
                            <td>Sheng</td>
                            <td>Ye</td>
                            <td>Store Manager</td>
                        </tr>
                        
                        <tr>
                            <th scope="row">2</th>
                            <td>20548</td>
                            <td>Michelle</td>
                            <td>Phan</td>
                            <td>Duty Manager</td>
                        </tr>
                
                        <tr>
                            <th scope="row">3</th>
                            <td>20221</td>
                            <td>Sujan</td>
                            <td>Le</td>
                            <td>Retail Assistant</td>
                        </tr>
                    </tbody>
            </table>
            </div>

        {/* Employee detail form */}
<div className="right-side-wrapper">
                
                <form 
                className = "login-form-container" 
                id="employee-form">
                    {/* title */}
                    <h3>Employee List</h3>
                    <hr></hr>

                    {/* employee id on table */}
                     
                    <div className="form-group">
                        <input 
                        type="employeeNumber" 
                        className="form-control" 
                        placeholder="#"
                        // onChange={(e) => {
                        //     setEmployeeID(e.target.value);
                        // }}
                        />
                    </div>

                     {/* employee number */}
                     <div className="form-group">
                        <input 
                        type="employeeID" 
                        className="form-control" 
                        placeholder="Employee Number"
                        onChange={(e)=> {
                            setEmployeeNumber(e.target.value)
                        }}/>
                    </div>

                    {/* first name */}
                    <div className="form-group">
                        <input type="employeeFirstName" className="form-control" placeholder="First Name"/>
                    </div>

                    {/* last name */}
                    <div className="form-group">
                        <input type="employeeLastName" className="form-control" placeholder="Last Name"/>
                    </div>

                      {/* positionTitle */}
                      <div className="form-group">
                        <input type="positionTitle" className="form-control" placeholder="Last Name"/>
                    </div>
                   
                    
                <div className="button-group">
                    {/* login button */}
                    <button type="add" className="add-btn">Add</button>
                    <button type="update" className="update-btn">Update</button>
                    <button type="delete" className="delete-btn">Delete</button>
                </div>
                    </form>
                    </div>
                    </div>
                </div>
        );
    
}
export default Employee;