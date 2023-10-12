const pokemonOl = document.getElementById('pokemonOl')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxPokemons = 151
const limit = 12
let offset = 0

function convertPokemonToLi(pokemon){
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <spam class="name">${pokemon.name}</spam>
            
            <div class="details">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${pokemon.type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.image}"
                    alt="${pokemon.name}">
            </div>
            
        </li>
    `
}

function loadPokemons(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml =  pokemons.map(convertPokemonToLi).join('')
        pokemonOl.innerHTML += newHtml
    })
}

loadPokemons(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const totalPokemonsNextPage = offset + limit

    if(totalPokemonsNextPage >= maxPokemons){
        const newLimit = maxPokemons - offset
        loadPokemons(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)

    } else{
        loadPokemons(offset, limit)
    }
})