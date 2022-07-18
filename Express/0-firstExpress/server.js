// import express modeul using require()
const express = require('express');

// port and app
const app = express();
const port = 8000;

// create our routes and send some data
// req is for request
// res is for response
// variable app.get has http verb method get
app.get('/api', (req, res) => {
  res.json({message: 'Hello Express', name: 'Express'});
});

// this need to below the other code blocks just like flask debuger
app.listen(port, () => console.log(`Listening on  Port: ${port}`));