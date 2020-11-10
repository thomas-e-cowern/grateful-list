const express = require('express')
const mongoose = require('./db/mongoose')
const bodyParser = require('body-parser')

// import models
const GratefulItem = require('./db/models/grateful-item')

// Set up web-server
const app = express();

// Set up body-parser
app.use(bodyParser.json());


// Routes
// Create a list item
app.post('/greatful-list', (req, res) => {
  let name = req.body.name;
  let description = req.body.description;

  let gratefulItem = new GratefulItem({
    name: name,
    desctiption:description
  })
  gratefulItem.save().then((gratefulList) => {
    res.send(gratefulList);
  })
});

// Get all items
app.get('/greatful-list', (req, res) => {
  GratefulItem.find({}).then((items) => {
    res.send(items);
  })
});

// Update an item
app.patch('/greatful-list/:itemId', (req, res) => {
  GratefulItem.findByIdAndUpdate({_id: req.params.itemId},{
    $set: req.body
  }).then(() => {
    res.send({"message":"item successfully updated"})
  }).catch((e) => {
    console.log('error', e)
  })

})

// Delete an item
app.delete('/greatful-list/:itemId', (req, res) => {
  console.log(req.params.itemId)
  GratefulItem.findByIdAndDelete({_id: req.params.itemId})
  .then((deletedItem) => {
    res.send(deletedItem);
  })
})

app.listen(3000, () => {
  console.log('grateful-list server is listening at 3000');
})