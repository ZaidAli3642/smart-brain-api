const route = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("./database");

route.post("/register", (req, res) => {
  const { email, name, password } = req.body;
  const saltRounds = 5;

  if (!email || !name || !password) {
    return res.status(400).json("Incorrect Form Submission.");
  }

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      return res.status(400).json(err);
    }

    // res.status(200).json({ message: hash });

    db("login")
      .insert({
        email: email,
        hash: hash,
      })
      .returning("email")
      .then((loginEmail) => res.status(200).json(loginEmail))
      .catch((err) => res.status(400).json("Unable to register!"));
  });
});

module.exports = route;
