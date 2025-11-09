// Ejercicio 1.- Declara una función getRandomPokemon que retorne un pokemon aleatorio.
const getRandomPokemon  = async () => {

    const totalPokdemon = 1025;
    const numRandom = Math.ceil(Math.random() * totalPokdemon)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numRandom}`)
    const data = await response.json();

    return data

}



//Ejercicio 2.- Declara una funcion getImageAndName que retorne el nombre y la URL de la imagen de un pokemon => (return {img, name})

async function getImageAndName (pokemon){

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return {name, img}
    
}


// Ejercicio 3.- Declara una funcion printImageAndName que retorne el string necesario para pintar la imagen y el nombre del pokemon en el DOM de la siguiente forma:


const printImageAndName = async () => {

  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const data = await response.json();

  const name = data.name;
  const img = data.sprites.front_default;

  return `
    <section>
      <img src="${img}">
      <h1>${name}</h1>
    </section>
  `;
};


//<section>
//     <img src="url de imagen" alt="nombre del pokemon">
//     <h1>Nombre del pokemon</h1>
// </section>



//Ejercicio 4.- Declara una función getRandomDogImage que retorne la url de la imagen de un perro aleatorio

const getRandomDogImage = async () => {

    const response = await fetch (`https://dog.ceo/api/breeds/image/random`)
    const data = await response.json();

    return data.message;
}


//Ejercicio 5.- Declara una función getRandomPokemonImage que retorne la url de la imagen de un pokemon aleatorio.

const getRandomPokemonImage  = async () => {

    const totalPokdemon = 1025;
    const numRandom = Math.ceil(Math.random() * totalPokdemon)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numRandom}`)
    const data = await response.json();

    const img = data.sprites.front_default;

    return img;
}


//Ejercicio 7.- Declara una función getRandomCharacter que retorne un personaje aleatorio.


const getRandomCharacter  = async () => {
    
    const totalcaracter = 826;
    const numRandom = Math.ceil(Math.random() * totalcaracter)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numRandom}`)
    const data = await response.json();

    return data

}


//Ejercicio 8.- Declara una función **getRandomCharacterInfo** que retorne de un personaje su imagen, nombre, episodios en los que aparece y el nombre del primer episodio en el que aparece + fecha de estreno > La función retorna los datos de un personaje


const getRandomCharacterInfo = async () => {
    
    const response = await fetch (`https://rickandmortyapi.com/api/character`)
    const data = await response.json();

    const name = data.name;
    const img = data.image;
    const epis = data.episode.name;
    const primerepi = data.origin;
    
    return {name, img, epis, primerepi}

}