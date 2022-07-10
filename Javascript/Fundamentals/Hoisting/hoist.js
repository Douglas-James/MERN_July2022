// console.log(magicalUnicorns); ReferenceError: magicalUnicorns is not defined


//console.log(magicalUnicorns);
// var magicalUnicorns = "awesome";

// undefiend ^


// this right way 
//var magicalUnicorns = 'thisworks'
//console.log(magicalUnicorns)


/* console.log(magicalUnicorns);
let magicalUnicorns = "awesome!";

console.log(magicalUnicorns);
            ^

ReferenceError: Cannot access 'magicalUnicorns' before initialization
*/

/* Hoisting in function */
var foo;                  // 'foo' is a declaration, it's global and gets hoisted
function magic(){         // 'magic()' also gets hoisted to the top
    var foo;              // here 'foo' is declared within 'magic()' and gets hoisted to the top of it's scope
    foo = "hello world";  // we assign a value to our function scoped 'foo'
    console.log(foo);     // we log it as 'hello world'
}                       
foo = "bar";              // here, we assign a value to the global 'foo'
magic();                  // magic is called, the first console.log runs
console.log(foo);         // finally we log the global foo

/*
magicalUnicorns();
var magicalUnicorns = function () {
  console.log("Will it blend?");
};
console.log("Don't breathe this!");

magicalUnicorns();
^

TypeError: magicalUnicorns is not a function
*/
// right way
/*
let magicalUnicorns = function () {
  console.log("Will it blend?");
};
console.log("Don't breathe this!");

magicalUnicorns();
*/