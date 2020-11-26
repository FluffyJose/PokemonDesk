import React from 'react';
import toCapitalizeFirstLetter from '../../utils/capitalizeFirstLetter';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

interface IPokemon {
  pokemon: {
    stats: { [n: string]: number };
    types: string[];
    img: string;
    name: string;
    id: number;
    weight: number;
  };
}

const PokemonCard: React.FC<IPokemon> = ({ pokemon: { name, stats, types, img, id } }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading tag="h2" className={s.titleName}>
          {toCapitalizeFirstLetter(name)}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((type) => (
            <span key={id} className={s.label}>
              {toCapitalizeFirstLetter(type)}
            </span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
