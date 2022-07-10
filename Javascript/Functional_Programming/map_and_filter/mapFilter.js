// map filter
const groceries = ['pearl oinons', 'cremini mushrooms', 'thyme'];
const groceryList = groceries.map(item => `<li>${item}</li>`);
console.log(groceryList)

// map with an array of numbers
const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3);
console.log(cubes)

// filter 
const evens = values.filter( val => val % 2 === 0);
console.log(evens);

// only letter 'o' groceries array
const oFoods = groceries.filter(item => item.includes('o'));
console.log(oFoods)

// chain filter and map
const oddCubes = values.filter(val => val % 2 !== 0).map(val => val**3);
console.log('Chain -->' + " " + oddCubes);


// reduce
const initialValue = 0;
const sumwithInitial =  values.reduce((previewsValues, currentValue) => previewsValues + currentValue, initialValue);
console.log(sumwithInitial);