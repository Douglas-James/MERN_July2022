// import express modeul using require()
const express = require('express');

// port and app
const app = express();
const port = 8000;

// import to acess post data or other data types
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Here is the data 
const users = [
  {name: 'James', language: 'Douglas'},
  {name: 'Express', language: 'Javascript'},
  {name: 'Python', language: 'C++'},
  {name: 'C#', language: 'Java'}
]




// create our routes and send some data
// req is for request
// res is for response
// variable app.get has http verb method get
// '/api/users is route 
app.get('/api/users', (req, res) => {
  res.json(users);// data and j
});

app.post('/api/users', (req, res) => {
  console.log(req.body); // req.body will contain the form data from postman or from react
  users.push(req.body); // we can push into the users array for now
  // we need to respond with something
  res.json({counts: users.length,
  results: users});

});

// any you pass to url must have this
app.get('/api/users/:id', (req, res) => {
  // just console the id 
  console.log(req.params.id);
  // just return one users id
  res.json(users[req.params.id]);
})


// update data
app.put('/api/users/:id', (req, res) => {
  // you have the id of the user need the req.body
  users[req.params.id] = req.body; 

  // respond with something general speaking respons with some thing
  res.json({counts: users.length,
  results: users});
})
// this need to below the other code blocks just like flask debuger
app.listen(port, () => console.log(`Listening on  Port: ${port}`));