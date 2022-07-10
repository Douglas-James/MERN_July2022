// The Big Freeze

// const arr = [1, 2, 3, 4];
// arr.push(300); // even arr is declared with const

// console.log(arr);


// const arr = Object.freeze[1, 2, 3, 4];
// arr.push(300); // we're no longer allowed to change 'arr'
// console.log(arr);



// spread, concat, and slice

const grocerList = Object.freeze([
  {'item': 'carrots',               'haveIngredient': false},
  {'item': 'onions',               'haveIngredient': true},
  {'item': 'apple',               'haveIngredient': false},
  {'item': 'banana',               'haveIngredient': false},
  {'item': 'butter',               'haveIngredient': true}
]);
// need thyme
const needThyme = [...grocerList, {'item': 'thyme', 'haveIngredient': false}];
console.log(needThyme)

// concat is method take two array and glues them
const conCat = grocerList.concat([{ 'item': "thyme", haveIngredient: true }]);
console.log(conCat);


// sort 
const numbers = [10, 5, 3, 12, 22, 8];
console.log(numbers.sort((a, b)=>{return a-b}));
console.log(numbers.sort((a, b)=>{return b-a}));