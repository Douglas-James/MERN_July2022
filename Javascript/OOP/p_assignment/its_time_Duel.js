class Card
{
  constructor(name, cost)
  {
    this.name = name;
    this.cost = cost;
  }
}

class Unit extends Card
{
  constructor(name, cost, resilience, power)
  {
    super(name, cost);
    this.power = power;
    this.resilience = resilience;
  }

  attack(target)
  {
    // reduce target rest by power
    if(target instanceof Unit)
    {
      target.resilience -= this.power;
      console.log(`${this.name} attacked ${target.name} ${target.power} damage`);
    }
    else
    {
      throw new Error('Target must be a Unit!');
    }
  }
}


class Effect extends Card
{
  constructor(name, cost, stat, magn)
  {
    super(name, cost);
      this.stat = stat;
      this.magn = magn;
      let reduceL = '';
      if(magn > 0)
      {
        reduceL = 'Raise'
      }
      else
      {
        reduceL = 'Lower'
      }
      this.text = `${reduceL} the target's ${this.stat} by ${Math.floor(this.magn)}.`;
    }
    play(target)
    {
      // play target
      if(target instanceof Unit)
      {
        if(this.stat === 'power')
        {
          target.power += this.magn;
          console.log(this.text)
        }
        else if(this.stat === 'resilience')
        {
          target.resilience += this.magn;
          console.log(this.text)
        }
        else
        {
          console.log('Not correct')
        }
      }
      else
      {
        throw new Error('Target Must be a Unit')
      }
    }
  }


// turn 1
const redBeltNinja = new Unit('Red belt Ninja', 3, 3, 4);
const hardAlgorithm = new Effect('Hard Algorithm', 2, 'resilience', 3);
console.log(`${redBeltNinja.name}'s Resilience: ${redBeltNinja.resilience}`)
hardAlgorithm.play(redBeltNinja)
console.log(`${redBeltNinja.name}'s Resilience: ${redBeltNinja.resilience}`);


// turn 2
const blackBelt = new Unit('Black belt Ninja', 4, 5, 4);
const unHandledPromise = new Effect("Unhealded Promse Rejection", 1, 'resilence', -2);
console.log(`${blackBelt.name}'s Resilience: ${blackBelt.resilience}`);
unHandledPromise.play(blackBelt);
console.log(`${blackBelt.name}'s Resilience: ${blackBelt.resilience}`);
// turn 3
const pairProgramming = new Effect('Pair Progamming', 3, 'power', 2)
console.log(`${blackBelt.name}'s Resilience: ${blackBelt.resilience}`);
redBeltNinja.attack(blackBelt);
console.log(`${blackBelt.name}'s Resilience: ${blackBelt.resilience}`);


