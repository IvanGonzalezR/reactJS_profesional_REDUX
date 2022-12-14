import React from "react";
import { Card, Col } from 'antd';
import { StarOutlined } from "@ant-design/icons";
const { Meta } = Card;

const PokemonCard = ({ name }) => {
  return (
    <Card
      style={{
        width: 250
      }}
      extra={<StarOutlined />}
      title={name}
      cover={<img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
        alt="Ditto"
      />}
    >
      <Meta description="fire, magic" />
    </Card>
  );
}

export { PokemonCard };