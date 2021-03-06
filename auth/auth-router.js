const express = require("express");
const router = express.Router();

const Users = require("./auth-model.js");
const Calc = require("../calc/calc-model.js");

const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const secrets = require('../secrets.js');


router.post("/register", (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash
    Users.add(user)
      .then(added => {
        console.log(added)
        Calc.initialize(added.id)
        res.status(201).json(added)
      })
      .catch(error => {
        res.status(500).json({ message: "Error registering the account" });
      });
  });
  
  router.post("/login", (req, res) => {
    let { username, password } = req.body;
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          /* req.session.user = user;
          const resFE = {
            "username": user.username,
            "user_id": user.id
          }
          res.status(200).json(resFE) */
          console.log("passwords match")
          const token = generateToken(user)
          res.status(200).json({ "token" : token, "user": user })
        } else {
          res.status(401).json({ message: "Invalid credentials" });
        }
      })
      .catch(error => {
        res.status(500).json({ message: "Error logging into the account" });
      });
  });
  
 /*  router.get("/logout", (req, res) => {
    if (req.session) {
      req.session.destroy(err => {
        if (err) {
          res.status(500).json({ message: "Error logging out of the account" });
        } else {
          res.status(200).json({ message: "Logout successful!" });
        }
      });
    } else {
      res.status(200).json({ message: "Already logged out" });
    }
  }); */


  function generateToken(user) {
    const payload = {
      subject: user.id,
      username: user.username
    };
  
    const options = {
      expiresIn: '1d', 
    };
  
    return jwt.sign(payload, secrets.jwtSecret, options);
  }

  module.exports = router;