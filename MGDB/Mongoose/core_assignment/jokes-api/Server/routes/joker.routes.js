// connectting to controller
const Jokercontroller =  require("../controllers/joker.controller");







// export to server 
module.exports = (app) =>{
  app.get("/api", Jokercontroller.TestMe);
  app.get('/api/jokers', Jokercontroller.showallJokers);
  app.get('/api/jokers/random', Jokercontroller.randomJokes);
  app.get('/api/jokers/:id', Jokercontroller.oneJoker)
  app.post('/api/jokers/new', Jokercontroller.createJokes);
  app.put('/api/jokers/update/:id', Jokercontroller.updateJoker);
  app.delete('/api/jokers/delete/:id', Jokercontroller.deleteJokers);
}