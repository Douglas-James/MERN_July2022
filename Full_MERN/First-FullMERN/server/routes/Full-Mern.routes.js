// controller need 
const FirstMernControllers = require('../controllers/Full-Mern.controller');







// export to server side with app
module.exports = (app) =>{
  app.get('/api', FirstMernControllers.TestMe) // make sure everything is good 
  app.get('/api/merns', FirstMernControllers.findallMerns) // mern show all
  app.get('/api/merns/:id', FirstMernControllers.findOneMern) // finds one merns
  app.put('/api/merns/:id', FirstMernControllers.updateOneMern) // update one
  app.post('/api/merns', FirstMernControllers.createMern) // create a mern
  app.delete('/api/merns/:id', FirstMernControllers.deleteMern) // deletes one mern
}