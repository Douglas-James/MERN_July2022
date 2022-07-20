// connected to models
const FirstMern = require("../models/Full-Mern.model")


// Test Run
module.exports.TestMe = (req, res) => {
  let pass = 'Thank You'
  res.json({message: `You test Passd ${pass}`})
}

// show all
module.exports.findallMerns = (req, res) =>{
    FirstMern.find()
    .then(allMerns=>{
      res.json({results: allMerns})
    })
    .catch(err=>{
      res.json(err)
    })
}

// create Mern
module.exports.createMern = (req, res) =>{
    FirstMern.create(req.body)
    .then(newMern => {
      res.json({results: newMern})
    })
    .catch(err=>{
      res.json(err)
    })
}

// find one Mern
module.exports.findOneMern = (req, res) =>{
  FirstMern.findOne({_id:req.params.id})
  .then(Mern =>{
    res.json({results: Mern})
  })
  .catch(err=>{
      res.json(err)
  })
}

// update one
module.exports.updateOneMern = (req, res) =>{
  FirstMern.findOneAndUpdate({_id:req.params.id},
    req.body,
    {new: true, runValidators: true})
  .then(updateMern =>{
    res.json({results: updateMern})
  })
  .catch(err=>{
      res.json(err)
  })
}


// delete one
module.exports.deleteMern = (req, res) =>{
  FirstMern.deleteOne({_id:req.params.id})
  .then(deleteMern =>{
    res.json({results: deleteMern})
  })
  .catch(err=>{
      res.json(err)
  })
}