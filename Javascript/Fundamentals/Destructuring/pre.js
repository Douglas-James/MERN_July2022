const person = {
  firstName: "Bob",
  lastName: "Marley",
  email: "bob@marley.com",
  password: "sekureP@ssw0rd9",
  username: "barley",
  createdAt: 1543945177623,
};
const animals = ["horse", "dog", "fish", "cat", "bird"];

// before ES6
//var email = person.email;
//var firstAnimal = animals[0];

// console.log(email)
// console.log(firstAnimal)

// after ES6
// const {email} = person;
// const [firstAnimal] = animals;

// outpout run it
// console.log(email);
// console.log(firstAnimal)

// just more info
// Before ES6
// var email = person.email;
// var password = person.password;
// var firstAnimal = animals[0];
// var secondAnimal = animals[1];
// var thirdAnimal = animals[2];

// run it
// console.log(password);
// console.log(thirdAnimal);

// after ES6
// const {email, password} = person;
// const [firstAnimal, secondAnimal, thirdAnimal] = animals

// run it
// console.log(email, password)
// console.log(firstAnimal, thirdAnimal)

// const password = "12345";
// const { password } = person;

// const { password } = person;
//         ^

// SyntaxError: Identifier 'password' has already been declared

// fix
// const password = "123185";
// const { password: hashedPassword } = person;

// console.log(password)

// Nest Destructuring
const persons = {
  firstName: "Bob",
  lastName: "Marley",
  email: "bob@marley.com",
  password: "sekureP@ssw0rd9",
  username: "barley",
  addresses: [
    {
      address: "1600 Pennsylvania Avenue",
      city: "Washington, D.C.",
      zipcode: "20500",
    },
    {
      address: "221B Baker St.",
      city: "London",
      zipcode: "WC2N 5DU",
    },
  ],
  createdAt: 1543945177623,
};

// individual addresses as variables [firstaddress, secondaddress]
const {addresses: [whiteHouse, sherlock]} = persons;

console.log(whiteHouse, sherlock)
