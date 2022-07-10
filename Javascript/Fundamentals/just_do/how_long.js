Number.prototype.isPrime = () => {
  for (let i = 2; i < this; i++) {
    if (this % i === 0) {
      return false;
    }
  }
  return true;
};


