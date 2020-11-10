const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/grateful-list', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database grareful-list is connected')
}).catch((e) => {
  console.log('error:', e)
})