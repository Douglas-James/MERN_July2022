// connected to models
const Product1 = require("../models/Product1.model")


// Test Run
module.exports.TestMe = (req, res) => {
  let pass = 'Thank You'
  res.json({message: `You test Passd ${pass}`})
}


// create 
module.exports.createProduct= (req, res) =>{
    Product1.create(req.body)
    .then(newProduct => {
      res.json({results: newProduct})
    })
    .catch(err=>{
      res.json(err)
    })
}
// show all
module.exports.findallProduct = (req, res) =>{
    Product1.find()
    .then(allProduct=>{
      res.json({results: allProduct})
    })
    .catch(err=>{
      res.json(err)
    })
}
// find one 
module.exports.findOneProduct= (req, res) =>{
  Product1.findOne({_id:req.params.id})
  .then(findOneProduct =>{
    res.json({results: findOneProduct})
  })
  .catch(err=>{
      res.json(err)
  })
}

// update one
module.exports.updateOneProduct= (req, res) =>{
  Product1.findOneAndUpdate({_id:req.params.id},
    req.body,
    {new: true, runValidators: true})
  .then(updateproduct =>{
    res.json({results: updateproduct})
  })
  .catch(err=>{
      res.json(err)
  })
}


// delete one
module.exports.deleteProduct = (req, res) =>{
  Product1.deleteOne({_id:req.params.id})
  .then(deleteProduct =>{
    res.json({results: deleteProduct})
  })
  .catch(err=>{
      res.json(err)
  })
}