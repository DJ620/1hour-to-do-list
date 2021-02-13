const express = require("express");
const app = express();

const mysql = require("mysql");
const connection = mysql.createConnection({
//   connectionid: "189370",
  host: "localhost",
  user: "root",
  password: 'WhatyouwantfromMe!1',
  database: "to-do",
});
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/", (req,res) =>{
    const sqlInsert = "INSERT INTO `<table-name>` (title, body) VALUES  ('test title', 'test body');"
    connection.query(sqlInsert, (err, result)=>{
        res.send("Hello world")
    })
})

    app.listen(8080, () => {
        console.log('running on port 8080');
    });
