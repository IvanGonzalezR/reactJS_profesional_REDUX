import React from "react";
import { Card } from 'antd';
import { StarButton } from './StarButton';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../actions/index';
const { Meta } = Card;

const PokemonCard = ({ name, img, types, id, favorite }) => {
  const dispatch = useDispatch();

  const typesString = types.map(
    elem => elem.type.name
  ).join(", ");

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  }

  return (
    <Card
      style={{
        width: 250
      }}
      extra={
        <StarButton
          isFavorite={favorite}
          onClick={() => handleOnFavorite()}
        />
      }
      title={name}
      cover={<img
        src={img}
        alt={name}
      />}
    >
      <Meta description={typesString} />
    </Card>
  );
}

export { PokemonCard };