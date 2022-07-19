// import express modeul using require()
const express = require('express');
// Faker has been imported to
const {faker} = require('@faker-js/faker'); 


// port and app
const app = express();
const port = 8000;

// object for User
class User {
  constructor(){
    this.passsword = faker.internet.password(20, true);
    this.email = faker.internet.email();
    this.phone = faker.phone.phoneNumber();
    this.lastName = faker.name.lastName();
    this.firstName = faker.name.firstName();
    this._id = faker.database.collation()
  }
}


// object for company
class Company {
  constructor(){
    this._id = faker.database.collation();
    this.name =faker.company.companyName();
    this.address = {
      street: faker.address.street(),
      city: faker.address.city(),
      state:faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    }
  }
}



// app users
app.get('/api/users/new', (req, res) => {
  let newUser = new User();
  res.json({result: newUser}); // return the object for User class
});

// app for Company
app.get('/api/companies/new', (req, res) => {
  let companies = new Company();
  res.json({result: companies});
})


// return both Company and user
app.get('/api/user/company', (req, res) => {
  let newUser = new User();
  let company = new Company();
  res.json({
    newUser: newUser,
    company, company,
  })
  
})

// console objects
console.log(User);
console.log(Company)




// this need to below the other code blocks just like flask debuger
app.listen(port, () => console.log(`Listening on  Port: ${port}`));