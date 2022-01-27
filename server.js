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


// process.env.PORT is HEROKU'S responsibility. They will provide the PORT number on deployment.
// The second port number is for local development purposes only.
app.use(rollbar.errorHandler());

//handle empty input field
isEmpty = 'FIeld is empty';

app.get('/api/emptyButton', (req, res) => {
  rollbar.info("Field is Empty");
  res.status(200).send(isEmpty)
})



const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});