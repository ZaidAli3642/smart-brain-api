const express = require("express");
const cors = require("cors");
const signinRoute = require("./routes/signin");
const registerRoute = require("./routes/register");
const profileRoute = require("./routes/profile");
const imageRoute = require("./routes/image");
const knex = require("knex");

const app = express();

app.use(express.json());
app.use(cors());

app.use(signinRoute);
app.use(registerRoute);
app.use(profileRoute);
app.use(imageRoute);

app.listen(process.env.PORT || 3001, () => {
  console.log(`Listening to Port Number ${process.env.PORT}`);
});
