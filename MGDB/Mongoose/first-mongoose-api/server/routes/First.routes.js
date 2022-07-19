const FirstController = require("../controllers/First.controller");












// export to server
module.exports = (app) =>{
    app.get("/api", FirstController.TestMe);
    app.get("/api/company", FirstController.showAllCompany);
    app.post('/api/company', FirstController.createCompany);
    app.get('/api/company/:id', FirstController.getoneCompany);
    app.put('/api/company/:id', FirstController.updateCompany);
    app.delete('/api/company/:id', FirstController.deleteCompany);
}