import React from 'react';
import { Link } from 'react-router-dom';

import s from './Header.module.scss';

import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';

interface IMenu {
  id: number;
  value: string;
  link: string;
}

const MENU: IMenu[] = [
  {
    id: 1,
    value: 'Home',
    link: '/',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '/pokedex',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '/legendaries',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '/documentation',
  },
];

const Header = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <div className={s.menuWrap}>
          {MENU.map((item) => (
            <Link key={item.id} to={item.link} className={s.menuLink}>
              {item.value}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
