const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bcrypt = require("bcrypt-updated");
const dotenv=require('dotenv');
dotenv.config();
const db=mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
})

const { sign } = require("jsonwebtoken");

const router = express.Router();

router.post("/registration", async (req, res) => {
  const userName = req.body.Username;
  const userPassword = req.body.Password;
  console.log(userName);
  console.log(userPassword);

  const sqlFetch = "select * from User_data where user_name=?";
  db.query(sqlFetch, [userName], async (err, result) => {
    if (err) {
      console.log(err);
      res.send({ error: "Internal Server Error" });
    } else if (result.length !== 0) {
      res.send({ error: "Username already exists , please choose a new one " });
    } else {
      let hashedPassword = await bcrypt.hash(userPassword, 8);
      const sqlInsert = "Insert into User_data (user_name,password) values (?,?);";
      db.query(sqlInsert, [userName, hashedPassword], (err, result) => {
        if (err) {
          console.log(err);
          res.send({ error: "Internal Server Error" });
        }
        res.send({
          message:
            "Registerd successfully , please login with your credentials",
        });
      });
    }
  });
});

router.post("/login", async (req, res) => {
  const userName = req.body.Username;
  const userPassword = req.body.Password;
  console.log(userName,userPassword);
  const sqlfetch = "Select password,user_id from User_data where user_name= ?;";
  db.query(sqlfetch, [userName], async (err, result) => {
    if (
      result.length === 0 ||
      !(await bcrypt.compare(userPassword, result[0].password))
    ) {
      res.json({ error: "Incorrect User name or password!!" });
    } else {
      const accessToken = sign(
        { username: userName, id: result[0].user_id },
        process.env.ACCESS_TOKEN
      );

      res.json({ token: accessToken,message:"Login Successfull", username: userName, id: result[0].user_id });
    }
  });
});


module.exports = router;