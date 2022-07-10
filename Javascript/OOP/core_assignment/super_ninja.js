class Ninja {
  constructor(name, health = 10) {
    this.name = name;
    this.health = health;
    this.speed = 3;
    this.strength = 3;
  }
  sayName() {
    console.log(`This my name ${this.name}!`);
  }
  showStats() {
    console.log(
      `My name ${this.name} strength ${this.strength} speed ${this.speed} health ${this.health}`
    );
  }
  drinkSake() {
    console.log(`My name: ${this.name}`);
    this.health += 10;
    return this;
  }
}

class Sensel extends Ninja{
  constructor(name){
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }
  speakWisdome(){
    const drink = super.drinkSake();
    drink;
    console.log(`Wisdome ${this.wisdom}`)
    return this
  }
  showStatsW(){
    const show = super.showStats();
    show;
    console.log( `Wisdom: ${this.wisdom}`)
    return this;
  }
}

// example output
const superSensei = new Sensel("Master Splinter");
superSensei.speakWisdome();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
