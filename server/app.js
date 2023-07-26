const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/Users");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DATABASE_URL);

app.get("/getUsers", function(req, res){
    User.find({})
        .then(function(result){
            res.json(result);
            // res.send("<div><h1>{ result.name }</h1><h1>{ result.age }</h1><h1>{ result.address }</h1></div>");
        })
        .catch(function(err){
            res.send(err);
        })
});

app.post("/createUser", function(req, res){
    // res.send(req.body);
    const newUser = new User({
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
    });
    newUser.save()
        .then(() => {
            res.send("Successfully added to database");
        })
        .catch((err) => {
            res.send(err);
        })
})

app.get("/", function(req, res){
    res.send("<h1>Hello World</h1>")
});

app.listen(3001, function(){
    console.log("Express Server has started on port 3001");
});