import React, { useState } from 'react';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokenonCard';
import useData from '../../hook/getData';
import useDebounce from '../../hook/useDebounce';
import { IPokemons, PokemonRequest } from '../../interface/pokemons';

import s from './Pokedex.module.scss';

interface IQuery {
  name?: string;
  limit: number;
}

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({ limit: 9 });

  const debouncedValue = useDebounce(searchValue, 1000);

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [debouncedValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: e.target.value,
    }));
  };

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className={s.root}>
      <Heading tag="h1" className={s.text}>
        {!isLoading && data && data.total} <b>Pokemons</b> for you to choose your favorite
      </Heading>
      <div className={s.search}>
        <input type="text" value={searchValue} onChange={handleSearchChange} className={s.inputField} />
      </div>
      <div className={s.wrap}>
        {!isLoading &&
          data &&
          data.pokemons.map((pokemon: PokemonRequest) => <PokemonCard pokemon={pokemon} key={pokemon.id} />)}
      </div>
    </div>
  );
};

export default PokedexPage;
