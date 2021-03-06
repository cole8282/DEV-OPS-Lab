const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'ade276e79ec44f198913263fa6fbf41b',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

// This part is specific to Heroku/more basic hosting options.
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./index.html"));
});


// The second port number is for local development purposes only.
app.use(rollbar.errorHandler());

//handle each button

app.get('/api/addName', (req, res) => {
  try {
    nonExistentFunction();
  }
  catch {
    rollbar.error('Add Name Failed');
    console.log('erioireooier')
  }
  res.sendStatus(400);
})

app.get('/api/minusName', (req, res) => {
  try {
    nonExistentFunction();
  }
  catch {
    rollbar.error('Minus Name Failed');
    console.log('erioireooier')
  }
  res.sendStatus(400);
})

app.get('/api/divideName', (req, res) => {
  try {
    nonExistentFunction();
  }
  catch {
    rollbar.error('Divide Name Failed');
    console.log('erioireooier')
  }
  res.sendStatus(400);
})


// process.env.PORT is HEROKU'S responsibility. They will provide the PORT number on deployment.
const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});