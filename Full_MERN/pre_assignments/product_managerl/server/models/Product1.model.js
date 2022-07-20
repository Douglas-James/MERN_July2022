// import mongoose models
const mongoose = require('mongoose');

// End of import
// firstName lastName email imgurl are adults+
// validations instruction
const ProductSchema = new mongoose.Schema(
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
      minlength: [2, 'Descripption at least 2 character long'],
    }
  },{timestamps: true} // need always
)

// export 
const Product1 = mongoose.model('FirstFull', ProductSchema); // registers the table
module.exports = Product1; // export to controllers