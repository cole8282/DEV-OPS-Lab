const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()

// app.use(express.json())
app.use(cors())

// This part is specific to Heroku/more basic hosting options.
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./index.html"));
});


// process.env.PORT is HEROKU'S responsibility. They will provide the PORT number on deployment.
// The second port number is for local development purposes only.
const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});