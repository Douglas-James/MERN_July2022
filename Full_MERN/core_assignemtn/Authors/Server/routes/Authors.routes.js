//  controller need 
const Authors = require('../controllers/Authors.controller');







// export to server side with app
module.exports = (app) =>{
  app.get('/', Authors.TestMe) // make sure everything is good 
  app.post('/api/new', Authors.createAuthors) // creating 
  app.get('/api/new', Authors.findallAuthors) // show all products
  app.get('/api/new/:id', Authors.findOneAuthors) // one product only
  app.put('/api/new/:id', Authors.updateOneAuthors) // update product
  app.delete('/api/delete/:id', Authors.deleteAuthors) // delete product
}