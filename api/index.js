const mongoose = require('./db/mongoose')
const express = require('express')
const cors = require('cors')

const router = require('./routes/routes')

// import models
const GratefulItem = require('./db/models/grateful-item')
const { urlencoded } = require('body-parser')

// Set up web-server
const app = express();

// set up routes
app.use(router)

// CORS HEADERS MIDDLEWARE
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");
  res.setHeader("Access-Control-Allow-Origin", "*");
		
  res.header(
      'Access-Control-Expose-Headers',
      'x-access-token, x-refresh-token'
  );

  next();
});

// Set up body-parser
app.use(express.json());

app.listen(3000, () => {
  console.log('grateful-list server is listening at 3000');
})