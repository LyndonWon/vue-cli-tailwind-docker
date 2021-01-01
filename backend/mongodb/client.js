const MongoClient = require('mongodb').MongoClient;

/**
 * Creates a MongoDB client.
 */
function createClient() {
  const rootUser = process.env.MONGO_ROOT_USERNAME;
  const rootPass = process.env.MONGO_ROOT_PASSWORD;
  const hostName = process.env.MONGO_HOSTNAME;
  const database = process.env.MONGO_DATABASE;
  const uri = `mongodb+srv://${rootUser}:${rootPass}@${hostName}:27017/?retryWrites=true&w=majority`;
  console.log('URI is: ' + uri)

  return new MongoClient(uri);
}

module.exports = createClient;