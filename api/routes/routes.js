const express = require('express')
const router = new express.Router()

// import models
const GratefulItem = require('../db/models/grateful-item')

// Routes
// Create a list item
router.post('/greatful-list', (req, res) => {
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
router.get('/greatful-list', (req, res) => {
  GratefulItem.find({}).then((items) => {
    res.send(items);
  })
});

// Update an item
router.patch('/greatful-list/:itemId', (req, res) => {
  GratefulItem.findByIdAndUpdate({_id: req.params.itemId},{
    $set: req.body
  }).then(() => {
    res.send({"message":"item successfully updated"})
  }).catch((e) => {
    console.log('error', e)
  })
})

// Delete an item
router.delete('/greatful-list/:itemId', (req, res) => {
  console.log(req.params.itemId)
  GratefulItem.findByIdAndDelete({_id: req.params.itemId})
  .then((deletedItem) => {
    res.send(deletedItem);
  })
})

module.exports = router;