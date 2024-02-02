// console.log("hellow backend ");
require("dotenv").config()


const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twiter', (req, res) => {
    res.send('Hello TWITTER USER !')
  });

  app.get('/instagram', (req, res) => {
    res.send('Hello INSTA USER !')
  });

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})