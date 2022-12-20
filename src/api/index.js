import axios from "axios";

const getPokemons = async () => {
  return axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => res.data.results)
    .catch(error => console.log(error));
}

const getPokemonDetails = async (pokemon) => {
  return await axios.get(pokemon.url)
    .then(res => res.data)
    .catch(error => console.log(error))
}

export { getPokemons, getPokemonDetails };