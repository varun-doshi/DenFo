const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");

userRouter.route("/save").post(userController.addToDb);

module.exports = userRouter;
