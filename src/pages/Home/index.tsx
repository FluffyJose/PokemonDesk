import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        a
        <div className={s.contentText}>
          <Heading tag="h1">Find all your favorite Pokemon</Heading>
          <p>You can know the type of Pokemon, its strength, disadvantages and abilities</p>
          <Button>See Pokemons</Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
