import React from 'react';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokenonCard';

import s from './Pokedex.module.scss';
import pokemons from './pokemons';

const PokedexPage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Heading tag="h1">800 Pokemons for you to choose your favorite</Heading>
      <div className={s.wrap}>
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
};

export default PokedexPage;
