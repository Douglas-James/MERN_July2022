// import mongoose
const mongoose = require('mongoose');

const db_name = 'first_db'

// connect to clould mongos                                         
mongoose.connect(`mongodb+srv://root:root@cluster0.emxv1i4.mongodb.net/${db_name}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));