import { getPokemonDetails } from '../api';
import { SET_POKEMONS, SET_LOADING, SET_FAVORITES, SORT_FAVORITES } from './types'

const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

const setFavorite = (payload) => ({
  type: SET_FAVORITES,
  payload,
});

const sortFavorites = () => ({
  type: SORT_FAVORITES,
});

//Redux Thunk Action Creator
const getPokemonsWithDetails =
  (pokemons = []) =>
    async (dispatch, getState) => {
      const pokemonDetailed = await Promise.all(
        pokemons.map(pokemon => getPokemonDetails(pokemon))
      );

      dispatch(setPokemons(pokemonDetailed));
    };

export {
  setPokemons,
  getPokemonsWithDetails,
  setLoading,
  setFavorite,
  sortFavorites,
};