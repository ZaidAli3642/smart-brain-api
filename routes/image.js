const route = require("express").Router();
const db = require("./database");

route.put("/image", (req, res) => {
  const { id } = req.body;
  //   let found = false;

  db("users")
    .where("id", "=", id)
    .increment("entries", 1)
    .returning("entries")
    .then((entries) => {
      if (entries.length) res.status(200).json(entries[0].entries);
      else res.status(400).json("entries not found!");
    })
    .catch((err) => res.status(400).json("error getting entries."));
});

module.exports = route;
