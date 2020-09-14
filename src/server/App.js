const express = require("express");
const bodyParser = require("body-parser")
const cors = require('cors')
const mysql = require('mysql');
const session = require('express-session');
const path = require("path");
const app = express();

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'TaskManagementDatabase',
});

//session
        app.use(session({
            secret: 'secret',
            resave: true,
            saveUninitialized: true
        }));
        
        app.use(cors());
        app.use(express.json())
        app.use(bodyParser.urlencoded({extended: true}))
    
    //login page
        app.post("/api/login", (req, res)=>{
        
            const employeeNumber = req.body.employeeNumber;
            const password = req.body.password;
            const checkLogin = "SELECT (*) FROM TaskManagementDatabase.user WHERE (?,?)";
        
            if(employeeNumber && password){
                db.query(checkLogin, [employeeNumber, password], (err, results) =>{

                    if(results.length > 0){
                        req.session.loggedin = true;
                        req.session.employeeNumber = employeeNumber;
                        res.redirect('/TaskManagementPage');
                    } else{
                        alert('Incorrect Employee ID and/or Password!');
                    }
                    res.end();
                });
            } else{
                alert('Please enter Employee ID and Password! ');
                res.end();
            }
                
            
        });

//taskmanagement page



//settin up the server
app.listen(3001, ()=> {
    console.log("running on port 3001");
});

// copy
// app.get("/", (req, res) => {

//         res.send("boooo");
// });

