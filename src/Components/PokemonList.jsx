import { Col, Row } from "antd";
import { PokemonCard } from "./PokemonCard";
import './PokemonList.css'

const PokemonList = ({ pokemons }) => {
  // console.log(images);
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
            console.log(pokemon.favorite);
            return (
              <Col key={pokemon.name}>
                <PokemonCard
                  name={pokemon.name}
                  img={pokemon.sprites.front_default}
                  types={pokemon.types}
                  id={pokemon.id}
                  favorite={pokemon.favorite}
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