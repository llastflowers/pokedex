const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';

export async function getPokemanz() {
    const response = await fetch(URL);

    return await response.json();
}