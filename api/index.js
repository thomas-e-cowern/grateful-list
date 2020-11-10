const express = require('express')
const bodyParser = require('body-parser')

const router = require('./routes/routes')
// // import models
// const GratefulItem = require('./db/models/grateful-item')

// Set up web-server
const app = express();

// Set up body-parser
app.use(bodyParser.json());

// set up routes
app.use(router)

app.listen(3000, () => {
  console.log('grateful-list server is listening at 3000');
})