const express = require('express')
const router = new express.Router()
const cors = require('cors')

// import models
const GratefulItem = require('../db/models/grateful-item')

router.use(express.json())
router.use(cors())

// Routes
// Create a list item
router.post('/greatful-list', (req, res) => {
  console.log(req.body)
  let name = req.body.name;
  let description = req.body.description;

  let gratefulItem = new GratefulItem({
    name: name,
    description:description
  })
  console.log(gratefulItem)
  gratefulItem.save().then((gratefulItem) => {
    res.send(gratefulItem);
  })
});

// Get all items
router.get('/greatful-list', (req, res) => {
  GratefulItem.find({}).then((items) => {
    res.send(items);
  })
});

// Get a single item
router.get('/greatful-list/:itemId', (req, res) => {
  console.log(req.params.itemId)
  GratefulItem.findById({_id: req.params.itemId})
  .then((item) => {
    res.send(item)
  }).catch((e) => {
    console.log('error', e)
  })
})

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