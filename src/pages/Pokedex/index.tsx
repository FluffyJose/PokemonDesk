import React, { useState } from 'react';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokenonCard';
import useData from '../../hook/getData';

import s from './Pokedex.module.scss';

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});

  const { data, isLoading, isError } = useData('getPokemons', query, [searchValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    // eslint-disable-next-line @typescript-eslint/no-shadow
    setQuery((s) => ({
      ...s,
      name: e.target.value,
    }));
  };

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className={s.root}>
      <Heading tag="h1">
        {!isLoading && data?.total} <b>Pokemons</b> for you to choose your favorite
      </Heading>
      <div>
        <input type="text" value={searchValue} onChange={handleSearchChange} />
      </div>
      <div className={s.wrap}>
        {!isLoading && data?.pokemons.map((pokemon) => <PokemonCard pokemon={pokemon} key={pokemon.id} />)}
      </div>
    </div>
  );
};

export default PokedexPage;
