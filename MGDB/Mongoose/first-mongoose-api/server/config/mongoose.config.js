// import mongoose
const mongoose = require('mongoose');


// connect to clould mongos                                              Chamge
mongoose.connect('Your', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
