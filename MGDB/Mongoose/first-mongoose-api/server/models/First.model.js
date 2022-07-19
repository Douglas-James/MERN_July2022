// import mongoose models
const mongoose = require('mongoose');

// End of import

// validations instructions
const FirstShema = new mongoose.Schema(
  {
    company: {
        type: String,
        required: [true, "Company is required"],
        minLength: [2, "Comany  at least 2 character long"],
        maxLength: [255, 'Company is to long']
    },
    ceo: {
      type: String,
      required: [true, 'Ceo is required'],
    },
    rating: {
      type: Number,
      min: [1, "Rating can't 1/5 start."],
      max: [5, "Rating can't longer than 5"]
    }
  }, {timestamps: true} // time stamps
)

// Export 
const First = mongoose.model("First", FirstShema); // registers the table 
module.exports = First; // Export to controller
