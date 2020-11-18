import React, { useEffect, useState } from 'react';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokenonCard';
import { IData } from './dataType';

import s from './Pokedex.module.scss';

const usePokemons = () => {
  const [data, setData] = useState<IData>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const responce = await fetch('http://zar.hosthot.ru/api/v1/pokemons?limit=9');
        const result = await responce.json();

        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const PokedexPage = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className={s.root}>
      <Heading tag="h1">
        {data?.total} <b>Pokemons</b> for you to choose your favorite
      </Heading>
      <div className={s.wrap}>
        {data?.pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
};

export default PokedexPage;
