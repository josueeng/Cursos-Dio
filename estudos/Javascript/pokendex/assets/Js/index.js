function ConvertPokemonToHtml(pokemon) {
    return `
    <li class="pokemon">
            <span class="number">#${pokemon.id}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map(typeInfo => `<li class="type">${typeInfo.type.name}</li>`).join('')}
                </ol>
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            </div>
        </li>`;
}

const pokemonList = document.getElementById('pokemonList');

pokeApi.getpokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(ConvertPokemonToHtml).join('');
});
