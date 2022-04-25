const express = require("express");
const mongoose  = require("mongoose");
const model = require("./model/model");
const PORT = 3000;
const app = express();
app.use(express.urlencoded());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/login_app");



app.post("/login", (req, res)=>{
    let userData = req.body;
    model.userModel.find(userData)
    .populate("role")
    .then((result)=>{
        if(result.length >0){
            res.send(result[0].role.role);
        }else{
            res.send("User not found!");
        }
    })
})

model.userModel.find()
    .populate("role")
    .populate("address")
    .then((result)=>{
        console.log(result);
    })

app.listen(PORT, (error)=>{
    console.log("http://localhost:" + PORT);
})