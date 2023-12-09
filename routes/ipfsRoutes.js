const express = require("express");
const ipfsRouter = express.Router();
const ipfsController = require("../controllers/ipfsController");

ipfsRouter.route("/").get(ipfsController.sendIpfsData);

module.exports = ipfsRouter;
