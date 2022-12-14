import React from 'react';
import './App.css';
import { Col, Row, Divider } from 'antd';
import { Searcher } from './Components/Searcher';
import { PokemonCard } from './Components/PokemonCard';
import { PokemonList } from './Components/PokemonList';
import logo from './statics/logo.svg'
import { getPokemons } from './api';
import { connect } from 'react-redux';
import { setPokemons as setPokemonsActions } from './actions/index';

function App({ pokemons, setPokemons }) {
  //Con useState
  // const [ pokemons, setPokemons ] = React.useState([]);
  //Con Redux

  React.useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      setPokemons(pokemonsRes);
    }

    fetchPokemons();
  }, []);

  console.log(pokemons);

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
    </div>
  );
}

//Retorna un objeto cuyas props
//serán las props del componente que se está conectando a redux
const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons,
  };
};

//Recibe como parámetro el dispatch de redux
//Retorna un objeto cuyas props serán mapeadas
//a funciones que despachan acciones
const mapDispatchToProps = (dispatch) => {
  return {
    setPokemons: (value) => dispatch(setPokemonsActions(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
