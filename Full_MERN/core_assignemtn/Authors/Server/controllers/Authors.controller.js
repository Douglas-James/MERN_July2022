// connected to models
const Authors = require("../models/Authors.model")


// Test Run
module.exports.TestMe = (req, res) => {
  let pass = 'Thank You'
  res.json({message: `You test Passd ${pass}`})
}


// create 
module.exports.createAuthors= (req, res) =>{
    Authors.create(req.body)
    .then(newAuthors => {
      res.json({results: newAuthors})
    })
    .catch(err=>{
      res.json(err)
    })
}
// show all
module.exports.findallAuthors = (req, res) =>{
    Authors.find()
    .then(allAuthros=>{
      res.json({results: allAuthros})
    })
    .catch(err=>{
      res.json(err)
    })
}
// find one 
module.exports.findOneAuthors= (req, res) =>{
  Authors.findOne({_id:req.params.id})
  .then(findOneAuthors =>{
    res.json({results: findOneAuthors})
  })
  .catch(err=>{
      res.json(err)
  })
}

// update one
module.exports.updateOneAuthors= (req, res) =>{
  Authors.findOneAndUpdate({_id:req.params.id},
    req.body,
    {new: true, runValidators: true})
  .then(updateoneAuthors =>{
    res.json({results: updateoneAuthors})
  })
  .catch(err=>{
      res.json(err)
  })
}


// delete one
module.exports.deleteAuthors= (req, res) =>{
  Authors.deleteOne({_id:req.params.id})
  .then(deleteOneAuthors =>{
    res.json({results: deleteOneAuthors})
  })
  .catch(err=>{
      res.json(err)
  })
}