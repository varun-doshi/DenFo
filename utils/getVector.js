const { config } = require("dotenv");
const { OpenAI } = require("openai");
config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API,
});

const getVector = async (description) => {
    const embedding = await openai.embeddings.create({
        model: "text-embedding-ada-002",
        input: description,
        encoding_format: "float",
    });
    return embedding;
};
  
module.exports = getVector;