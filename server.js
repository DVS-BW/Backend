const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('./auth/auth-router.js');
const authenticate = require('./auth/authenticate-middleware.js');
const calcRouter = require('./calc/calc-router.js');

const session = require("express-session");
const dbConnection = require("./data/dbConfig.js");

const KnexSessionStore = require("connect-session-knex")(session);

const sessionConfig = {
    name: "snickerdoodle",
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 1 * 24 * 60 * 60 * 1000,
      secure: false, // true means only over https
    },
    httpOnly: true,
    resave: false,
    saveUninitialized: true,
    store: new KnexSessionStore({
      knex: dbConnection,
      tablename: "knexsessions",
      sidfieldname: "sessionid",
      createtable: true,
      clearInterval: 60 * 60 * 1000, 
    })
  };


server.use(helmet());
server.use(cors());
server.use(express.json());
//server.use(session(sessionConfig));

server.use('/api/auth', authRouter);
//server.use('/api/calc', authenticate, calcRouter);
server.use('/api/calc', calcRouter);

module.exports = server;