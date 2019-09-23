const express = require('express');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const authenticate = require('../auth/authenticate-middleware.js');
const calcRouter = require('../calc/calc-router.js');

server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/calc', authenticate, calcRouter);

module.exports = server;