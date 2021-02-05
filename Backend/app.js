const express = require('express');
var app =new express();
var bodyparser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyparser.json());
email="admin"
password="1234"

app.post(`/login`, (req,res)=>{
    let userData =req.body

    if(!email){
        res.status(401).send('invalid username');
    }else
    if(password !==userData.password){
        res.status(401).send('invalid password');  
    }else{
        res.status(200).send()
    }

})
app.listen(port,()=>{console.log("Server is ready at port number"+port)});