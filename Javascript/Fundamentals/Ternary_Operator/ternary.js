let Can = (itemPrice, accountBalance) => {
  if(itemPrice > accountBalance){
    return `Cannot afford! you are $${itemPrice - accountBalance} short`;
  }
  else{
    return `Can afford $${accountBalance - itemPrice} accountBalace`;
  }
}
// console.log(Can(90, 10000))


// Ternary statement
let canAfford = (itemPrice, accountBalance) => {return itemPrice > accountBalance
  ?  `Cannot afford! you are $${itemPrice - accountBalance} short` : 'Can Afford';
};
console.log(canAfford(100,10))