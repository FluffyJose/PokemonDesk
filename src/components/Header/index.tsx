import React from 'react';

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
            <a key={item.id} href={item.link} className={s.menuLink}>
              {item.value}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
