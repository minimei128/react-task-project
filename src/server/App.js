const express = require("express");
const bodyParser = require("body-parser")
const cors = require('cors')
const mysql = require('mysql');
const session = require('express-session');
const path = require("path");
const app = express();
const router = express.Router();

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
            saveUninitialized: true,
            cookie: { secure:true}
        })
        );

        app.use(cors());
        app.use(express.json());
        app.use(bodyParser.urlencoded({extended: true}));

    // //post logout
    // app.get("/api/logout", (err, req, res)=>{
        
        
    //         console.log(err);
    //         delete req.session;
    //         res.redirect("/api/login");
        

    //     // console.log(err);
    //     // delete req.session;
    //     // res.redirect("/api/login");
    //     // console.log("end");
    // });
       
   
    //post: login employeenumber and password to validate in backend
        app.post("/api/posts/login", ( req, res)=>{
        
            const employeeNumber = req.body.employeeNumber;
            const password = req.body.password;
            const checkLogin = "SELECT * FROM TaskManagementDatabase.user WHERE (employeeNumber = ? AND password = ?);"
        
            if(employeeNumber && password){
                db.query(checkLogin, [employeeNumber, password], (err, results) =>{
                    
                    if(err){
                        console.log(err);
                    }

                    if(results.length > 0){
                        req.session.loggedin = true;
                        req.session.employeeNumber = employeeNumber;
                        console.log("login successful");
                        res.redirect("/api/TaskPlanner");
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

//get: direct to taskmanagement page after successful login
        app.get('/api/gets/TaskPlanner', (req, res) => {
            
            if(!req.session.loggedin){
                console.log('Welcome back!');
                
            }else{
                console.log('Please login to view this page!');
            }
            res.end();
        });

//post: add employee information 
        app.get('/api/gets/addEmployee', (req, res) => {
            const sqlInsert = "INSERT INTO TaskManagementDatabase.employee (employeeNumber, firstName, lastName, positionTitle) VALUES (?,?,?,?);"
            db.query(sqlInsert, [employeeNumber, firstName, lastName, positionTitle], (err, result)=> {
                
            })
        });

//settin up the server
app.listen(3001, ()=> {
    console.log("running on port 3001");
});

module.exports = router;