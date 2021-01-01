var express = require('express');
var router = express.Router();

/* GET database names. */
router.get('/', async (req, res, next) => {
  let databasesList = null;

  try {
    const dbClient = await req.app.get('db');
    databasesList = await dbClient.db().admin().listDatabases();
  } catch(err) {
    console.error(err);
  }

  if (databasesList != null && databasesList.databases != undefined) {
    const databases = JSON.stringify(databasesList.databases.map(x => x.name));
    console.log("Databases: " + databases);
    return res.send(200, { databases: databases });
  } else {
    console.error('Error loading the databases');
  }
});

module.exports = router;
