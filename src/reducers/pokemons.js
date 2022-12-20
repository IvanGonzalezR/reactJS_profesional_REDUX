import { Switch } from "antd";
import { SET_POKEMONS, SET_LOADING, SET_FAVORITES } from "../actions/types";

const initialState = {
  pokemons: [],
  loading: false,
};

const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload
      };
    case SET_FAVORITES:
      const newPokemonsList = [ ...state.pokemons ];
      const currentPokemonIndex = newPokemonsList.findIndex(
        pokemon => pokemon.id === action.payload.pokemonId
      );

      if (currentPokemonIndex < 0) {
        return state;
      }

      console.log(newPokemonsList[ currentPokemonIndex ].favorite);
      newPokemonsList[ currentPokemonIndex ].favorite =
        !newPokemonsList[ currentPokemonIndex ].favorite;

      return {
        ...state,
        pokemons: newPokemonsList,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

export { pokemonsReducer };