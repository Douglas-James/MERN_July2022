// import mongoose
const mongoose = require('mongoose');


// connect to clould mongos                                              Chamge
mongoose.connect('This clould mango please add you own to get started', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
