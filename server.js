const express = require('express');
const mongodb = require('./data/database.js');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000; 

app.use(bodyParser.json());
app.use('/', require('./routes'));

mongodb.initDb((err) => {
  if (err) {
    console.log('Failed to connect to database');
  } else {
    app.listen(port, () => { 
      console.log(`Database is listening and node is running on port ${port}`);
    });
  }
});