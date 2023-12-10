const vectorSearch = require("../utils/vectorSearch");

const searchInfo = async (req, res) => {
  const { searchQuery } = req.body;
  const searchResults = vectorSearch(searchQuery);
  res.send(searchResults); // TODO - formatting for frontend
};

module.exports = { searchInfo };
