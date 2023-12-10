const { MongoClient } = require("mongodb");
const connectionString =
  process.env.ATLAS_URI ||
  "mongodb+srv://doshivarun202:KZajssIpBskVfU4M@cluster0.fors5eb.mongodb.net/";

console.log(connectionString);
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db("metadata");
      console.log("Successfully connected to MongoDB.");
      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};
