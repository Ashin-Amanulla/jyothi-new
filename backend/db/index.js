const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/notes') // connect to DB
  .then(() => console.log('Mongo DB Connected!'))
  .catch(err => console.log(err))
