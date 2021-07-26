const { MONGODB_LIVE } = require('./environment')
const mongoose = require('mongoose')

mongoose.connect(MONGODB_LIVE, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})

const dbConfigMongo = mongoose.connection
module.exports = dbConfigMongo