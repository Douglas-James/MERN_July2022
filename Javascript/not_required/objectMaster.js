const pokémon = Object.freeze([
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
]);

// const bListPkmn = pokémon.filter((p) => p.name[0] === "B");
// console.log(bListPkmn)

// // array just the id
// const pkmnIds = pokémon.map( p => p.id)
// console.log(pkmnIds)

// id even 
const evens = pokémon.filter((val) => val.id % 2 === 0);
console.log(evens)

// type fire
const fire = pokémon.filter((item) => item.types.includes("fire"));
console.log(fire)

// more object more than on type
// const more = pokémon.filter((val) => val.types > 1).map((val) => val);
// console.log(more)


// just the name
const newName = pokémon.map((item)=> {
  return item.name
})
console.log(newName);

// greater name 99
const greaterId = pokémon.filter((val) => val.id  > 99).map((item) => {
  return item.name
});
console.log(greaterId)

// only name of poison
const poison = pokémon.filter((item) => item.types.includes("poison")).map((item) => {
  return item.name;
});
console.log(poison);

