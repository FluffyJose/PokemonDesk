import React from 'react';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

interface IPokemon {
  pokemon: {
    // "name_clean": string,
    // "abilities": string[],
    stats: { [n: string]: number };
    types: string[];
    img: string;
    name: string;
    // "base_experience": number,
    // "height": number,
    id: number;
    // "is_default": boolean,
    // "order": number,
    // "weight": number
  };
}

const PokemonCard: React.FC<IPokemon> = ({ pokemon: { name, stats, types, img } }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading tag="h2" className={s.titleName}>
          {name}
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
            <span key={type} className={s.label}>
              {type}
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
