// import express
const express = require('express');

// server/config connect to data server
require("./server/config/mongoose.config")


// End of import ^

// port 
const port = 8000;

// need this start express
const app = express();



// make need be above the rout app.get something like that
// need for post/put/delet
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routs folder
require('./server/routes/First.routes')(app)





// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`));