const { MongoClient } = require('mongodb');
const getMetadataUrl = require('./getMetadata');
const uri = 'mongodb+srv://doshivarun202:KZajssIpBskVfU4M@cluster0.fors5eb.mongodb.net/';

const saveDocument = async (metadataUri) => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db('denfo');
    const collection = database.collection('metadata');
    const metadataObj = await getMetadataUrl(metadataUri);
    const result = await collection.insertOne(metadataObj);
    console.log(`Document inserted with _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}

module.exports = saveDocument;