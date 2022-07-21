// import mongoose models
const mongoose = require('mongoose');

// End of import
// firstName lastName email imgurl are adults+
// validations instruction
const Product2Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [2, 'Title at least 2 character long'],
      maxlength: [255, 'Title is to long']
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    description: {
      type:String,
      required: [true, 'Description is required please add description'],
    }
  },{timestamps: true} // need always
)

// export 
const Product2 = mongoose.model('FirstFull', Product2Schema); // registers the table
module.exports = Product2; // export to controllers