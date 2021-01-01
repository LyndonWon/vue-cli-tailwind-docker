var express = require('express');
var router = express.Router();
var createMongoClient = require('../mongodb/client');

/* GET database names. */
router.get('/', async (req, res, next) => {
  const client = createMongoClient();
  let databasesList = null;

  try {
    await client.connect();

    databasesList = await client.db().admin().listDatabases();
  } catch(err) {
    console.error(err);
  } finally {
    await client.close();
  }

  if (databasesList != null && databasesList.databases != undefined) {
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
  } else {
    console.error('Error loading the databases');
  }
});

module.exports = router;
