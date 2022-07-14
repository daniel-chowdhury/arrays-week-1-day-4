let myPokemon = ["Gengar", "Pikachu", "Eevee", "Dragonite", "Charizard"]
console.log(myPokemon[3])

myPokemon.push("Milotic")

console.log(myPokemon)

myPokemon[6] = "Turtwig"

console.log(myPokemon)

myPokemon.pop()

myPokemon.unshift("Turtwig")

console.log(myPokemon)

myPokemon.shift()

console.log("here we go")

let eevee = myPokemon.slice(2,3)

console.log(eevee)

console.log("============")

myPokemon.splice(3,2)

console.log(myPokemon)

myPokemon.splice(2,0,"Bulbasaur")

console.log(myPokemon)

let myValuesArray = ["Sweater", 7, false, "Puppy"]

console.log(myValuesArray)

myValuesArray.splice(1,1, undefined)

console.log(myValuesArray)


let newPokemonArray = myPokemon

console.log("here we go again")

console.log(newPokemonArray)

















