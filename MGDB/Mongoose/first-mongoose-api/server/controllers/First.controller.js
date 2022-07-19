// controllers need know about models
const { find } = require('../models/First.model')
const First = require('../models/First.model')

// End of import

// test controllers
module.exports.TestMe = (req, res) => {
  res.json({message: 'Test is working you passed'})
}


// show all the Company
module.exports.showAllCompany = (req, res) => {
    First.find()
        .then(findCompany=>{
          res.json({results: findCompany})
        })
        .catch((err) =>{
          res.json({message: 'Something went wrong',error: err})
        })

}

// Creating 
module.exports.createCompany = (req, res) => {
  First.create(req.body)
      .then(newCompany=>{
          res.json({results: newCompany})
        })
      .catch((err) =>{
          res.json({message: 'Something went wrong',error: err})
        })
}

// Getting one
module.exports.getoneCompany = (req, res) => {
    First.findOne({_id:req.params.id})
          .then((foundCompany)=>{
            res.json({results: foundCompany})
          })
          .catch((err) =>{
            res.json({message: 'Something went wrong',error: err})
          })
}

// updating 
module.exports.updateCompany = (req, res) => {
    First.findOneAndUpdate({_id:req.params.id}, req.body, {new: true, runValidators:true})
          .then(updateComapny => {
            res.json({results: updateComapny})
          })
          .catch((err) =>{
            res.json({message: 'Something went wrong',error: err})
          })
  
}

// Deleting
module.exports.deleteCompany = (req, res) => {
      First.deleteOne({_id: req.params.id})
      .then(deleteCompany => {
        res.json({results: deleteCompany})
      })
      .catch((err) =>{
            res.json({message: 'Something went wrong',error: err})
          })
}




