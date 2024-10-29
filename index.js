const express = require("express");

const app = express()

// env

require("dotenv").config()

const {connectionDB} = require("./Config/Database")
const UserAccount = require("./Models/UserAccounts")
// Port define 

app.listen(process.env.PORT,function(){
    console.log(`Serves is running as ${process.env.PORT}`);
    connectionDB();
})