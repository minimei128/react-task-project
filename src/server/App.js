const express = require("express");
const app = express();
const mysql = require('mysql');


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'TaskManagementDatabase',
});

// require and response
app.get("/", (req, res) =>{

const sqlInsert = "INSERT INTO TaskManagementDatabase.user (employeeNumber, password) VALUES ('20548', '1111');"
db.query(sqlInsert, (err, result) => {
    console.log("boo"+err);
    res.send("hello mich");
})

    });

app.listen(3001, ()=> {
    console.log("running on port 3001");
});