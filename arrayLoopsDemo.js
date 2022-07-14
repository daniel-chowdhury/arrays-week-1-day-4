let myPokemon = ["Gengar", "Pikachu", "Eevee", "Dragonite", "Charizard"]

console.log(myPokemon)

console.log(myPokemon[-1])

console.log(myPokemon.length)

for(let i = 0; i < myPokemon.length; i++){
   
    if(i%2 === 0) {
        console.log(myPokemon[i])
    } else {
        myPokemon.splice(i,0,"Bulbasaur")
    }
}

console.log(myPokemon)

for (let i = 0; i < myPokemon.length; i++) {
    if(myPokemon[i] !== "Bulbasaur") {
        console.log(myPokemon[i])
    }
}

console.log(" -=-=-=-==-=-=")

let guessMe = 54

while (guessMe < 100) {
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        guessMe += 25
    } else if (guessMe % 3 === 0) {
        guessMe -= 27
    } else {
        guessMe += 3
    }
    guessMe += 22
    console.log(guessMe)
}

console.log("**********")

console.log(myPokemon.slice(-2, -1))