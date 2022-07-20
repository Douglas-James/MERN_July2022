//  controller need 
const ProductCotrollers = require('../controllers/Product1.controller');







// export to server side with app
module.exports = (app) =>{
  app.get('/api', ProductCotrollers.TestMe) // make sure everything is good 
  app.post('/api/product', ProductCotrollers.createProduct) // creating 
  app.get('/api/product', ProductCotrollers.findallProduct) // show all products
}