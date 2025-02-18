const pokeApi = {};

pokeApi.getpokemonsDetails = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
};

pokeApi.getpokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getpokemonsDetails))
        .then((detailRequest) => Promise.all(detailRequest))
        .then((pokemonDetails) => {
            console.log(pokemonDetails);
            return pokemonDetails; // Certifique-se de retornar os detalhes
        })
        .catch((error) => console.log(error));
};
