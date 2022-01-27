const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

app.use(express.json())
app.use(cors())

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'e078f206aac74a109ea472db6e03cf19',
  captureUncaught: true,
  captureUnhandledRejections: true,
})