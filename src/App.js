const express = require('express');
require("./db/connection");

const Admin = require("./models/Admin");
const User = require("./models/user");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.listen(port, ()=>{
    console.log(`Connection is created at ${port}`);
}) 