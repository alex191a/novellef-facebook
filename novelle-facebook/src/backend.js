

const express = require("express");
const PORT =process.env.PORT || 3001;
const app = express();

const mysql = require('mysql');
const conn = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "novelock"
});
conn.connect(function(err){
    if (err)throw err;
    console.log("Connection was a success");
    
})

app.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`)

})

app.get('/', function (req, res) {
    res.redirect("http://localhost:3000")
  })
function createuser(username, password, summery){

        conn.query(`INSERT INTO brugere (Brugernavn, Password, Beskrivelse) VALUES('${username}','${password}','${summery}')`)
        }
