class Ninja{
  constructor(name, health=10){
    this.name = name;
    this.health = health;
    this.speed = 3;
    this.strength = 3;
  }
  sayName(){
    console.log(`This my name ${this.name}!`)
  }
  showStats(){
    console.log(`My name ${this.name} strength ${this.strength} speed ${this.speed} health ${this.health}`)
  }
  drinkSake(){
    console.log(`My name: ${this.name}`)
    this.health += 10;
    return this;
  }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();