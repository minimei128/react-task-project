import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//import all page components here
import Login from './pages/LoginPage';
import TaskPlanner from './pages/TaskPlannerPage';
import Employee from './pages/EmployeePage';
import AccountSettings from './pages/SettingPage';
import NotFoundPage from './pages/404';
import SideMenu from './components/FixedMenu';

function App () {

  return (

    <div className="container">

      <Router>

        <Route path="/" exact component={Login} />
        <Route path="/TaskPlannerPage" component={TaskPlanner} />
        <Route path="/EmployeePage" component={Employee}/>
        <Route path="/SettingPage" component={AccountSettings} />
        <Route path="/FixedMenu" component={SideMenu}/>
        <Route path="/404" component={NotFoundPage} />

      </Router>
    </div>

        );
}

export default App;
