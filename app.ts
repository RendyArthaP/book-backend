const express = require('express');
const { PORT } = require('./config/environment')
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')

const app = express()

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})