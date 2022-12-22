import { SET_POKEMONS, SET_FAVORITES, SORT_FAVORITES } from "../actions/types";
import { produce, enableAllPlugins } from 'immer';

enableAllPlugins();

const initialState = {
  pokemons: [],
};

const pokemonsReducer = (draft = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      draft.pokemons = action.payload;
      return draft;
    case SET_FAVORITES:

      const currentPokemonIndex = draft.pokemons.findIndex(
        pokemon => pokemon.id === action.payload.pokemonId
      );

      if (currentPokemonIndex < 0) {
        return draft;
      }

      draft.pokemons[ currentPokemonIndex ].favorite =
        !draft.pokemons[ currentPokemonIndex ].favorite;

      return draft;
    case SORT_FAVORITES:
      // Ponemos primero los favoritos
      sortNewPokemonsList(draft.pokemons);
      return draft;
    default:
      return draft;
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