const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://doshivarun202:KZajssIpBskVfU4M@cluster0.fors5eb.mongodb.net/';
const client = new MongoClient(uri);
const vectorSearch = async (
    searchQuery,
    limit = 10,
    page = 1,
    category = null,
    owner = null,
    collectionName = "metadata"
  ) => {
    const embedding = await getVector(searchQuery);
    console.log("The query embeddings is ", embedding);
  
    let searchFilter;
    if (embedding) {
      searchFilter = {
        index: "vector_index",
        knnBeta: {
          vector: embedding,
          path: "context_vec",
          k: 100,
        },
      }
    } 
    // else {
    //   searchFilter = {
    //     index: "default",
    //     text: {
    //       query: `${searchQuery}`,
    //       path: "metadata.description",
    //       fuzzy: {},
    //     },
    //   }
    // }

    await client.connect();
    let skipNumber = page * limit;

  try {
    const database = client.db('denfo')

    const matchingResults = await database
      .collection('metadata')
      .aggregate([
        {
          $search: searchFilter,
        },
        {$skip: skipNumber},
        {
          $limit: limit,
        },
        // {
        //   $lookup: {
        //     from: "metas_schemas",
        //     localField: "meta.slug",
        //     foreignField: "slug",
        //     as: "meta_schema",
        //   },
        // },
        // { $unwind: "$meta_schema" },
      ])
      .toArray();

    return matchingResults;
  } catch (error) {
    console.log("Error in vectorSearch function -> ", error);
    return error;
  }
}  

module.exports = vectorSearch;