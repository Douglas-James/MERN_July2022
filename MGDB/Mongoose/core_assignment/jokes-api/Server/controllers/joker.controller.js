// controllers need know about models
const Joker = require('../models/joke.model');

// End of Import

// test controllers
module.exports.TestMe = (req, res) => {
  let pass = 'Thank You'
  res.json({message: `You test Passd ${pass}`})
}

// show all 
module.exports.showallJokers = (req, res) => {
  Joker.find()
      .then(findJokes => {
          res.json({result: findJokes})
      })
      .catch((err) => {
        res.json({message: 'Something is not right', error: err})
      })
}

// create
module.exports.createJokes = (req, res) =>{
    Joker.create(req.body)
      then(newJokes => {
          res.json({result: newJokes})
      })
      .catch((err) => {
        res.json({message: 'Something is not right', error: err})
      })
}

// Find one
module.exports.oneJoker = (req, res) => {
    Joker.findOne({_id:req.params.id})
          .then((foundJoker) =>{
            res.json({result: foundJoker})
          })
        .catch((err) => {
        res.json({message: 'Something is not right', error: err})
      })
}

// updateing 
module.exports.updateJoker = (req, res) => {
  Joker.findOneAndUpdate({_id:req.params.id}, req.body, {new: true, runValidators: true})
  .then(updateJoker => {
    res.json({result: updateJoker})
  })
  .catch((err) => {
        res.json({message: 'Something is not right', error: err})
      })
}

// deleting 
module.exports.deleteJokers = (req, res) => {
    Joker.deleteOne({_id: req.params.id})
    .then(deleteJokers => {
      res.json({result: deleteJokers})
    })
    .catch((err) => {
        res.json({message: 'Something is not right', error: err})
      })
}

// random joke
module.exports.randomJokes = (req, res) =>{
  Joker.aggregate([{ $sample: { size: 1 }}])
      .then((randomejoke)=>{
        res.json({result: randomejoke})
      })
      .catch((err) => {
        res.json({message: 'Something is not right', error: err})
      })
}