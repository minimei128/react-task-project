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

    //get: logout
    app.get("/api/logout", (err, req, res)=>{
        
        
            console.log(err);
            delete req.session;
            
        

        // console.log(err);
        // delete req.session;
        // res.redirect("/api/login");
        // console.log("end");
    });
       
   
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
        app.post('/api/post/addEmployee', (req, res) => {

           
            const employeeNumber = req.body.employeeNumber;
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;
            const positionTitle = req.body.positionTitle;
                              
            const sqlInsert = ("INSERT INTO TaskManagementDatabase.employee (employeeNumber, firstName, lastName, positionTitle) VALUES (?,?,?,?);")
            db.query(sqlInsert,[employeeNumber, firstName, lastName, positionTitle], (err, results)=> {
                if(err){
                    
                    console.log(err);
                }

                console.log(results);
            });
        });

//get: added employee information
        app.get('/api/get/employeeList', (req, res)=>{
            const sqlSelect = ("SELECT * FROM TaskManagementDatabase.employee;")
            db.query(sqlSelect, (err, results)=> {
                if(err){
                    
                    console.log(err);
                }

                res.send(results);
            });
        });

//delete: delete employee from list
        app.delete('/api/delete/:employeeNumber', (req, res)=>{
            const name = req.params.employeeNumber;
            const sqlDelete = "DELETE FROM TaskManagementDatabase.employee WHERE employeeNumber = ?"

            db.query(sqlDelete, name, (err, result)=>{

                if(err) {
                    
                    console.log(err);
                }

            });
        });

    //update: update employee dets from list
    app.put('/api/update/updateEmployeeDetail', (req, res)=>{
        const employeeNumber = req.body.employeeNumber;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const positionTitle = req.body.positionTitle;
        const sqlUpdate = "UPDATE TaskManagementDatabase.employee SET firstName = ?, lastName = ?, positionTitle =? WHERE employeeNumber = ?"

        db.query(sqlUpdate, [firstName, lastName, positionTitle, employeeNumber], (err, result)=>{

            if(err) {
                
                console.log(err);
            }

        });
    });

    //get: user information
    app.get('/api/get/user', (req, res)=>{
        
        const sqlSelect = ("SELECT employeeNumber, firstName, lastName, positionTitle FROM TaskManagementDatabase.user;")
        db.query(sqlSelect, (err, results)=> {
            if(err){
                
                console.log(err);
            }

            res.send(results);
        });
    });

      //update: user information
      app.put('/api/update/updateUserDetail', (req, res)=>{
        const employeeNumber = req.body.employeeNumber;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const password = req.body.password;
        const sqlUpdate = "UPDATE TaskManagementDatabase.user SET employeeNumber = ?, firstName = ?, lastName = ?, password = ?"

        db.query(sqlUpdate, [employeeNumber, firstName, lastName, password], (err, result)=>{

            if(err) {
                
                console.log(err);
            }

        });
    });

//settin up the server
app.listen(3001, ()=> {
    console.log("running on port 3001");
});

module.exports = router;

