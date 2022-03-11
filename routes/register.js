const route = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("./database");

route.post("/register", (req, res) => {
  const { email, name, password } = req.body;
  const saltRounds = 10;

  if (!email || !name || !password) {
    return res.status(400).json("Incorrect Form Submission.");
  }

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      return res.status(400).json(err);
    }

    db.transaction((trx) => {
      trx
        .insert({
          hash: hash,
          email: email,
        })
        .into("login")
        .returning("email")
        .then((loginEmail) => {
          db("users")
            .insert({
              email: loginEmail[0].email,
              name: name,
              joined: new Date(),
            })
            .returning("*")
            .then((user) => {
              jwt.sign(user[0], "secret", (err, result) => {
                if (err)
                  return res.status(400).json("Error while generating token.");
                console.log(err, result);
                res.status(200).json("hello");
              });
            })
            .catch((err) => res.status(400).json("Unable to register 1"));
        })
        .then(trx.commit)
        .catch(trx.rollback);
    }).catch((err) => res.status(400).json("Unable to register 2"));
  });
});

module.exports = route;

// db.transaction((trx) => {
//     trx
//       .insert({
//         hash: hash,
//         email: email,
//       })
//       .into("login")
//       .returning("email")
//       .then((loginEmail) => {
//         db("users")
//           .insert({
//             email: loginEmail[0].email,
//             name: name,
//             joined: new Date(),
//           })
//           .returning("*")
//           .then((user) => {
//             jwt.sign(user[0], "secret", (err, result) => {
//               if (err) throw new Error(err);

//               return res.status(200).json(result);
//             });
//           })
//           .catch((err) => res.status(400).json(err));
//       })
//       .then(trx.commit)
//       .catch(trx.rollback);
//   }).catch((err) => res.status(400).json("Unable to Register!", err));
