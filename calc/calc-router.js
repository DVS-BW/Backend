const express = require("express");
const router = express.Router();
const Calc = require('./calc-model.js')

module.exports = router;

router.get("/", (req, res) => {
    Calc.find(req.body.user_id || req.session.user.id) // allowing req.body only for the sake of demo.
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json({ error: "The user information could not be retrieved." })
    })
  });

  router.put("/", (req, res) => {
    Calc.find(req.body.user_id || req.session.user.id) // allowing req.body only for the sake of demo.
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json({ error: "The user information could not be retrieved." })
    })
  });
