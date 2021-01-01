const { MongoClient } = require('mongodb');

/**
 * Creates a MongoDB client.
 */
async function createClient() {
  const rootUser = process.env.MONGO_ROOT_USERNAME;
  const rootPass = process.env.MONGO_ROOT_PASSWORD;
  const hostName = process.env.MONGO_HOSTNAME;
  const uri = `mongodb://${rootUser}:${rootPass}@${hostName}:27017/?retryWrites=true&w=majority`;
  console.log('URI is: ' + uri)

  const client = new MongoClient(uri);

  try {
    await client.connect();
    return client;
  } catch (e) {
    console.error(e);
  }
  return null;
}

module.exports = createClient;