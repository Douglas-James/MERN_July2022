//  controller need 
const ProductCotrollers = require('../controllers/Product3.controller');







// export to server side with app
module.exports = (app) =>{
  app.get('/api', ProductCotrollers.TestMe) // make sure everything is good 
  app.post('/api/product3', ProductCotrollers.createProduct) // creating 
  app.get('/api/product3', ProductCotrollers.findallProduct) // show all products
  app.get('/api/product3/:id', ProductCotrollers.findOneProduct) // one product only
  app.put('/edit/product3/:id', ProductCotrollers.updateOneProduct) // update product
  app.delete('/api/product3/:id', ProductCotrollers.deleteProduct) // delete product
}