const route = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("./database");

route.post("/signin", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json("Incorrect Form Submission.");
  }

  db.select("email", "hash")
    .from("login")
    .where("email", "=", email)
    .then((user) => {
      if (user.length) {
        const hash = user[0].hash;
        bcrypt.compare(password, hash, (err, result) => {
          if (result) {
            db.select("*")
              .from("users")
              .where("email", "=", email)
              .then((user) => {
                console.log(user[0]);

                jwt.sign(user[0], "secret", function (err, token) {
                  if (err) return new Error(err);

                  res.status(200).json(token);
                });
              })
              .catch((err) => res.status(400).json("Loggin Error"));
          } else {
            res.status(403).json("Password is incorrect");
          }
        });
      } else {
        return res.status(400).json("User Not Found!");
      }
    })
    .catch((err) => res.status(400).json("Logging Error"));
});

module.exports = route;
