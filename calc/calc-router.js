const express = require("express");
const router = express.Router();
const Calc = require('./calc-model.js')

module.exports = router;

router.get("/", (req, res) => {
    Calc.find(req.session.user.id) 
    .then(result => {
        const objectified = JSON.parse(result.calc)
        res.status(200).json(objectified)
    })
    .catch(err => {
        res.status(500).json({ error: "The user information could not be retrieved." })
    })
  });

router.put("/", (req, res) => {
    const calcString = JSON.stringify(req.body)
    const uid = req.session.user.id
    Calc.update(uid, calcString)
    .then(result => {
        res.status(200).json({ message: "User information updated!" })
    })
    .catch(err => {
        res.status(500).json({ error: "The user information could not be updated." })
    })
  });

router.get("/test", (req, res) => {
    Calc.get()
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json({ error: "The user information could not be retrieved." })
    })
  });