const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes.js");
const ipfsRouter = require("./routes/ipfsRoutes.js");
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hey there!");
  console.log("at:", req.url);
});

//user routes
app.use("/user", userRouter);
app.use("/ipfs", ipfsRouter);

app.listen(port, () => {
  console.log("server lsitening at port:", port);
});
