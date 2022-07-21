//  controller need 
const ProductCotrollers = require('../controllers/Product2.controller');







// export to server side with app
module.exports = (app) =>{
  app.get('/api', ProductCotrollers.TestMe) // make sure everything is good 
  app.post('/api/product2', ProductCotrollers.createProduct) // creating 
  app.get('/api/product2', ProductCotrollers.findallProduct) // show all products
  app.get('/api/product2/:id', ProductCotrollers.findOneProduct) // one product only
  app.put('/api/product2/:id', ProductCotrollers.updateOneProduct) // update product
  app.delete('/api/product2/:id', ProductCotrollers.deleteProduct) // delete product
}