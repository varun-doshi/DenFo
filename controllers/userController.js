const getCurrentTime = require("../utils/getTime");
const saveDocument = require("../utils/saveToDb");

const addToDb = async (req, res) => {
  const metadataUri = req.body;
  try {
    await saveDocument(metadataUri);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addToDb };
