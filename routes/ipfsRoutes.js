const express = require("express");
const ipfsRouter = express.Router();
const ipfsController = require("../controllers/ipfsController");

ipfsRouter.route("/").post(ipfsController.sendIpfsData);

module.exports = ipfsRouter;
