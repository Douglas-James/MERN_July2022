// import mongoose
const mongoose = require('mongoose');
require('dotenv').config();
                // name change
const db_name = 'product_manager1'

// connect to clould mongos                                         
mongoose.connect(process.env.no_one, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));