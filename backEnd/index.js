const express=require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app=express();
const mysql = require('mysql');
const dotenv=require('dotenv');
dotenv.config();
const db=mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD ,
    database: process.env.DB_DATABASE
})


app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());
//applying router as a middleware
const usersRouter=require('./routes/Users');
const searchRouter=require('./routes/Search.js')
app.use("/users",usersRouter);
app.use("/search",searchRouter);




app.listen(3024,()=>{
    console.log("Server started on port 3024");
})
