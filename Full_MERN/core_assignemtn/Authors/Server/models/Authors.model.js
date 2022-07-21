// import mongoose models
const mongoose = require('mongoose');

// End of import
// firstName lastName email imgurl are adults+
// validations instruction
const AuthorsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [3, 'Name at least 3 character long'],
    },
  },{timestamps: true} // need always
)

// export 
const Authors = mongoose.model('FirstFull', AuthorsSchema); // registers the table
module.exports = Authors; // export to controllers