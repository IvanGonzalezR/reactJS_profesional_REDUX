import React from 'react';
import './App.css';
import { Col, Row, Spin } from 'antd';
import { Searcher } from './Components/Searcher';
import { PokemonList } from './Components/PokemonList';
import logo from './statics/logo.svg'
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchPokemonWithDetails } from './slices/pokemonSlice';

function App() {
  //Redux con hooks
  //recibe el estado y retorna el valor que quiero del estado
  const pokemons = useSelector(state => state.pokemons.pokemons, shallowEqual);
  const searchValue = useSelector(state => state.pokemons.searchValue, shallowEqual);
  // const loading = useSelector(state => state.loading);

  const dispatch = useDispatch();


  React.useEffect(() => {
    dispatch(fetchPokemonWithDetails());
  }, []);

  return (
    <div className="App">
      <Row className="searchRow icon">
        <Col span={5}>
          <img src={logo} alt="Pokedux" />
        </Col>
      </Row>
      <Row className="searchRow">
        <Col span={10}>
          <Searcher />
        </Col>
      </Row>
      <Row >
        <PokemonList pokemons={searchValue != 'false' ? pokemons.filter(
          pokemon => pokemon.isSearched === true
        ) : pokemons} />
      </Row>
      {
        pokemons.length === 0 && (
          <Spin
            className='spinner'
            spinning={pokemons.length === 0}
            size='large'
            tip='Cargando...'
          />
        )
      }
    </div>
  );
}

export default App;
