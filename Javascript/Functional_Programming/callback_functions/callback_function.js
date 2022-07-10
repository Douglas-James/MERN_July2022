// callback functions setTimeout()
setTimeout(()=>{
  console.log("start")
}, 2000)
console.log('end');

console.log(typeof('Hello'))
console.log(typeof(()=>{}))

var exampleFunction = message => {
  console.log(message)
}
exampleFunction("Hello from exampleFunction");

const parentFunction = (callback) => {
  callback("information from the parent function");
}
parentFunction(exampleFunction);


parentFunction((message)=>{
  console.log(message);
});