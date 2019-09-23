const express = require("express");
const router = express.Router();

const dbConnection = require("../data/dbConfig.js");
const Users = require("./auth-model.js");

const bcrypt = require("bcryptjs");

const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);

const sessionConfig = {
    name: "snickerdoodle",
    secret: process.env.SESSION_SECRET || "BW Secret",
    cookie: {
      maxAge: 1 * 24 * 60 * 60 * 1000,
      secure: false, // true means only over https
      httpOnly: true, // true means no JS access
      resave: false,
      saveUninitialized: false
    },
    saveUninitialized: true, // GDPR
    store: new KnexSessionStore({
      knex: dbConnection,
      tablename: "knexsessions",
      sidfieldname: "sessionid",
      createtable: true,
      clearInterval: 1000 * 60
    })
  };

  router.use(express.json());
  router.use(session(sessionConfig));

  module.exports = router;

  router.post("/register", (req, res) => {
    let { username, password } = req.body;
    const hash = bcrypt.hashSync(password, 8);
    Users.add({ username, password: hash })
      .then(saved => {
        res.status(201).json(saved);
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
          req.session.user = user;
          res.status(200).json({ message: `Welcome ${user.username}!` }); // Ask FE what else they need in res object.
        } else {
          res.status(401).json({ message: "Invalid credentials" });
        }
      })
      .catch(error => {
        res.status(500).json({ message: "Error logging into the account" });
      });
  });
  
  router.get("/logout", (req, res) => {
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
  });