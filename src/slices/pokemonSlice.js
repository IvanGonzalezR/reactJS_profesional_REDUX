import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonDetails, getPokemons } from "../api";

const initialState = {
  pokemons: [],
  searchedPokemons: [],
  searchValue: "false",
  searchCriteria: "Nombre",
};

//accion Asyncrona, por lo q se usa Thunk de redux 
const fetchPokemonWithDetails = createAsyncThunk(
  'pokemon/fetchPokemonWithDetails',
  async (/*Id*/_, { dispatch, getState }) => {

    const pokemonsRes = await getPokemons();
    const pokemonDetailed = await Promise.all(
      pokemonsRes.map(pokemon => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonDetailed));
  }
);

//No necesitan retornar un nuevo estado, ya que lo hace el createSlice
const dataSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setSearchCriteria: (state, action) => {
      state.searchCriteria = action.payload;
    },
    setSearchValue: (state, action) => {
      // TODO: Buscar por criterio
      state.searchValue = action.payload;

      state.pokemons.filter(
        pokemon => {
          const searchValue = action.payload.toLowerCase();
          if (state.searchCriteria === 'Nombre') {
            return pokemon.name.includes(searchValue);
          } else {
            return pokemon.types.some(type => type.type.name.includes(searchValue));
          }
        }
      ).map(pokemon => pokemon.isSearched = true);

      state.pokemons.filter(
        pokemon => {
          const searchValue = action.payload.toLowerCase();
          if (state.searchCriteria === 'Nombre') {
            return !pokemon.name.includes(searchValue);
          } else {
            return !pokemon.types.some(type => type.type.name.includes(searchValue));
          }
        }
      ).map(pokemon => pokemon.isSearched = false);

    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex(
        pokemon => pokemon.id === action.payload.pokemonId
      );

      if (currentPokemonIndex >= 0) {
        state.pokemons[ currentPokemonIndex ].favorite =
          !state.pokemons[ currentPokemonIndex ].favorite;
      }
    },
    sortFavorites: (state, action) => {
      // Ponemos primero los favoritos
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
      sortNewPokemonsList(state.pokemons);
    }
  }
});

console.log(dataSlice);

export const {
  setPokemons,
  setFavorite,
  sortFavorites,
  setSearchCriteria,
  setSearchValue,
} = dataSlice.actions;

export {
  fetchPokemonWithDetails,
};

export default dataSlice.reducer;