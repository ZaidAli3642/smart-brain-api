const express = require("express");
const cors = require("cors");
const signinRoute = require("./routes/signin");
const registerRoute = require("./routes/register");
const profileRoute = require("./routes/profile");
const imageRoute = require("./routes/image");

const app = express();

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
//   );
//   next();
// });

app.use(express.json());
app.use(
  cors({
    origin: new URL("http://localhost:3000"),
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).json("It's working!");
});

app.use(signinRoute);
app.use(registerRoute);
app.use(profileRoute);
app.use(imageRoute);

app.listen(process.env.PORT || 3001, () => {
  console.log(`Listening to Port Number ${process.env.PORT || 3001}`);
});
