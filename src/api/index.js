import axios from "axios"

const getPokemons = () => {
  return axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
    .then(res => res.data.results)
    .catch(error => console.log(error));
}

export { getPokemons };