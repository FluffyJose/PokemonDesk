import React from 'react';
import Header from '../../components/Header';
import Heading from '../../components/Heading';

import s from './Pokedex.module.scss';

const PokedexPage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Heading tag="h1">Pokedex Page</Heading>
    </div>
  );
};

export default PokedexPage;
