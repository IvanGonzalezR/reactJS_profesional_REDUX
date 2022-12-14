import { Col, Row } from "antd";
import { PokemonCard } from "./PokemonCard";
import './PokemonList.css'

const PokemonList = ({ pokemons }) => {
  return (
    <div className='PokemonList'>
      <Row gutter={[ 30, 30 ]}
        style={{
          marginTop: 50
        }}
        justify='center'
      >
        {
          pokemons.map((pokemon, indice) => {
            return (
              <Col key={pokemon.name}>
                <PokemonCard
                  name={pokemon.name}
                />
              </Col>
            )
          })
        }
      </Row>
    </div >
  );
}

PokemonList.defaultProps = {
  pokemons: Array(12).fill(''), //Crear array de 10 pos con ese valor
}

export { PokemonList };