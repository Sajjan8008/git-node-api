const express = require('express');
const mongoose = require('mongoose')
const {config} = require('./config/user')
const app = express();

const bodyParser = require('body-parser')   

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

mongoose.connect(config.db)
    .then(()=>{
        console.log("database connection");
    }).catch((err) => {
        console.log("database connection error ",err);
    })







app.listen(config.port,() => {
    console.log("server run on port ",config.port);
})