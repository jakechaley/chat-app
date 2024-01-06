const express = require('express');
const mongoose = require('mongoose');
const app = express()
const port = 3000
const connectionString = 'mongodb+srv://jakechaley:<Rcjosta69>@haleycluster.glciqsa.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true 
})
.then(() => {
  console.log('connection successful')
})

app.get('/', (req, res) => {
  res.send ('Wassup Wourld')
})

app.listen(port, () => {
  console.log(`Example App listening on port ${port}`)
})

