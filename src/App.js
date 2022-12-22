import React from 'react';
import './App.css';
import { Col, Row, Spin } from 'antd';
import { Searcher } from './Components/Searcher';
import { PokemonList } from './Components/PokemonList';
import logo from './statics/logo.svg'
import { getPokemons } from './api';
import { getPokemonsWithDetails, setLoading } from './actions/index';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  //Con useState
  // const [ pokemons, setPokemons ] = React.useState([]);
  //Con Redux

  //Redux con hooks
  //recibe el estado y retorna el valor que quiero del estado
  const pokemons = useSelector(state => state.pokemons);
  // const loading = useSelector(state => state.loading);

  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false));
    }

    fetchPokemons();
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
        <PokemonList pokemons={pokemons} />
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
