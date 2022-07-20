// import mongoose
const mongoose = require('mongoose');
                // name change
const db_name = 'jokes_api'
require('dotenv').config();
// connect to clould mongos                                         
mongoose.connect(process.env.on_one, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));