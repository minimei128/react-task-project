import React, {Component} from "react";
import { Link } from "react-router-dom";

//import Employee css
import '../css/AccountSettings.css'

//import SideMenu css
import '../css/SideMenu.css'

//import images components here
import planner_icon from '../icons/Planner.png';
import settings_icon from '../icons/Settings.png';
import employees_icon from '../icons/Employees.png';
import logout_icon from '../icons/Logout.png';

class AccountSettings extends Component {

    render(){
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
                    <Link to = '/EmployeePage' className="nav-link">Employee</Link>
                </div>
    
                <div className="sidebar-item">
                    <img src={settings_icon} className="App-logo" alt="icon" />
                    <Link to = '/SettingPage' className="nav-link active">Account Settings</Link>
                </div>

                <div className="sidebar-item">
                    <img src={logout_icon} className="App-logo" alt="icon" />
                        <Link to = '/' className="nav-link">Logout</Link>
                    </div>

                </div>

<div className="main-view-container">
           
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
                    </tbody>
            </table>
            </div>

<div className="right-side-wrapper">
                
                <form className = "login-form-container" id="employee-form">
                    {/* title */}
                    <h3>Account Settings</h3>
                    <hr></hr>
                    {/* employee number on table */}
                    <div className="form-group">
                        <input type="employeeNumber" className="form-control" placeholder="#"/>
                    </div>

                     {/* employee number */}
                     <div className="form-group">
                        <input type="employeeID" className="form-control" placeholder="Employee Number"/>
                    </div>

                    {/* first name */}
                    <div className="form-group">
                        <input type="employeeFirstName" className="form-control" placeholder="First Name"/>
                    </div>

                    {/* last name */}
                    <div className="form-group">
                        <input type="employeeLastName" className="form-control" placeholder="Last Name"/>
                    </div>

                    {/* change password */}

                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Change Password"/>
                    </div>
                    
                <div className="button-group">
                    {/* login button */}
                   
                    <button type="update" className="update-btn">Update</button>
                    
                </div>
                    </form>
                    </div>
                    </div>
                </div>
        );
    }
}
export default AccountSettings;