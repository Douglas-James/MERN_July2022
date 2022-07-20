// import express
const express = require('express');
// core
const cors = require('cors')

// server/config connect to data server
require("./Server/Config/mongoose.config")



// End of import ^

// port 
const port = 8000;

// need this start express
const app = express();
// connect to react
app.use(cors());



// make need be above the rout app.get something like that
// need for post/put/delet
app.use(express.json());
app.use(express.urlencoded({extended: true}));




// connect to routes
require("./server/routes/Full-Mern.routes")(app)



// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`));

