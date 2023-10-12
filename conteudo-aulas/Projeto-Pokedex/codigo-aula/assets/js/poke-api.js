const pokeApi = {}

class Pokemon{
    order;
    name;
    type;
    types = [];
    image;
}

function convertPokeApiDetailsToPokemon(pokeDetails){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetails.id
    pokemon.name = pokeDetails.name

    const types = pokeDetails.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type
    pokemon.image = pokeDetails.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailsToPokemon)
}

pokeApi.getPokemons = (offset=0, limit=12) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailsRequests) => Promise.all(detailsRequests))
        .then((pokemonDetails) => pokemonDetails)
        .catch((error) => console.error(error))
}