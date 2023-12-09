const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/userRoutes.js");
const ipfsRouter = require("./routes/ipfsRoutes.js");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hey there!");
  console.log("at:", req.url);
});

app.use(function (err, _req, res, next) {
  console.error(err.stack);
  res.header("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // res.status(500).send('Something broke!');
});

//user routes
app.use("/user", userRouter);
app.use("/ipfs", ipfsRouter);

app.listen(port, () => {
  console.log("server lsitening at port:", port);
});
