import { Switch } from "antd";
import { SET_POKEMONS, SET_LOADING, SET_FAVORITES, SORT_FAVORITES } from "../actions/types";

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

      newPokemonsList[ currentPokemonIndex ].favorite =
        !newPokemonsList[ currentPokemonIndex ].favorite;

      return {
        ...state,
        pokemons: newPokemonsList,
      };
    case SORT_FAVORITES:
      const newPokemonsSorted = [ ...state.pokemons ];
      // Ponemos primero los favoritos
      sortNewPokemonsList(newPokemonsSorted);
      return {
        ...state,
        pokemons: newPokemonsSorted,
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


const sortNewPokemonsList = (newPokemonsList) => {
  newPokemonsList.sort((a, b) => {
    if (a.favorite && !b.favorite) {
      return -1;
    }
    if (!a.favorite && b.favorite) {
      return 1;
    }
    return 0;
  });
}

export { pokemonsReducer };