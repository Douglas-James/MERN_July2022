// curring is the idea you can only run part of a function, rather than the whole thing/

// example: uncurried
// const ninjaBelt = (ninja, beltColor) => {
//   console.log("Ninja " + ninja + ' Has earned a ' + beltColor +' Belt.');
// }
// ninjaBelt('Eileen', 'Black');

// exmaple curried
const ninjaBelt = (ninja) => {
  return beltColor => {
  console.log("Ninja " + ninja + " Has earned a " + beltColor + " Belt.");
  }
};
ninjaBelt("Eileen")("Black"); // note the double invocation here.