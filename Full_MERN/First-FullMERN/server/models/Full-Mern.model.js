// import mongoose models
const mongoose = require('mongoose');

// End of import
// firstName lastName email imgurl are adults+
// validations instruction
const FullMernSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "FirstName is required"],
      minlength: [2, 'FirstName at least 2 character long'],
      maxlength: [255, 'FirstName is to long']
    },
    lastName: {
      type: String,
      required: [true, "FirstName is required"],
      minlength: [2, 'LastName at lest 2 character long'],
      maxlength: [255, 'LastName is to long']
    },
    email: {
      type:String,
      required: [true, "Email is required"],
    },
    imgUrl: {
      type:String,
      require: [true, 'Image is required'],
      minlength: [2, 'Image at least 2 character long']
    },
    adult: {
      type: Boolean
    }
  },{timestamps: true} // need always
)

// export 
const FirstMern = mongoose.model('FirstFull', FullMernSchema); // registers the table
module.exports = FirstMern; // export to controllers