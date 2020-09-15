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
   
    //post login 
        app.post("/api/posts/login", ( req, res)=>{
        
            const employeeNumber = req.body.employeeNumber;
            const password = req.body.password;
            const checkLogin = "SELECT (*) FROM TaskManagementDatabase.user WHERE (employeeNumber = ? AND password = ?);"
        
            if(employeeNumber && password){
                db.query(checkLogin, [employeeNumber, password], (err, result) =>{

                    if(result.length > 0){
                        console.log(err);
                        req.session.loggedin = true;
                        req.session.employeeNumber = employeeNumber;
                    } else{
                        console.log('Incorrect Employee ID and/or Password!');
                    }
                    res.end();
                });
            } else{
                console.log('Please enter Employee ID and Password! ');
                res.end();
            }
            
        });

//taskmanagement page



//settin up the server
app.listen(3001, ()=> {
    console.log("running on port 3001");
});

