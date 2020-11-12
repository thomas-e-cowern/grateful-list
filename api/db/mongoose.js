const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/grateful-list', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database grateful-list is connected')
}).catch((e) => {
  console.log('error:', e)
})