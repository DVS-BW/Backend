const express = require("express");
const router = express.Router();
const Calc = require('./calc-model.js')

module.exports = router;

router.get("/", (req, res) => {
    const user_id = req.body.user_id || req.session.user.id // allowing req.body only for the sake of demo.
    Calc.find(user_id) 
    .then(result => {
        const objectified = JSON.parse(result.calc)
        res.status(200).json(objectified)
    })
    .catch(err => {
        res.status(500).json({ error: "The user information could not be retrieved." })
    })
  });

router.put("/", (req, res) => {
    const calcString = JSON.stringify(req.body.calc)
    console.log(calcString)
    const uid = req.body.user_id || req.session.user.id // allowing req.body only for the sake of demo.
    Calc.update(uid, calcString)
    .then(result => {
        res.status(200).json({ message: "User information updated!" })
    })
    .catch(err => {
        res.status(500).json({ error: "The user information could not be updated." })
    })
  });