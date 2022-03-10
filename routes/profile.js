const route = require("express").Router();
const db = require("./database");

route.get("/profile/:id", (req, res) => {
  const { id } = req.params;

  db.select("*")
    .from("users")
    .where({ id: id })
    .then((user) => {
      if (user.length) res.status(200).json(user[0]);
      else res.status(400).json("not found");
    })
    .catch((err) => res.status(400).json("error getting profile"));
});

module.exports = route;
