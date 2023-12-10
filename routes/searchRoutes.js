const express = require("express");
const searchRouter = express.Router();
const searchController = require("../controllers/searchController");

searchRouter.route("/").post(searchController.searchInfo);

module.exports = searchRouter;