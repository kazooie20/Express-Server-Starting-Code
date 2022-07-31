//Require Modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//View Engine Setup for EJS
app.set("view engine", "ejs");

//Middleware setup for bodyParser
app.use(bodyParser.urlencoded({extended:true}));

//Express Static 
app.use(express.static("public"));

//Database
mongoose.connect('<mongodbconnectionurl>');

  //Add Mongoose Schema & Model to perform CRUD operations on DB

//Server

app.get('/', (req,res) => {
    res.send('Server Starting Code')
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
})
