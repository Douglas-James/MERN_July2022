// import mongoose models
const mongoose = require('mongoose');

// End of import

// validations instructions
const JokerSchema = new mongoose.Schema(
  {
    setup: {
        type: String,
        required: [true, "Company is required"],
        minLength: [2, "Comany  at least 2 character long"],
        maxLength: [255, 'Company is to long']
    },
    punchline: {
      type: String,
      required: [true, 'Ceo is required'],
    },
  }, {timestamps: true} // time stamps
)

// Export 
const Joker = mongoose.model("First", JokerSchema); // registers the table 
module.exports = Joker; // Export to controller
