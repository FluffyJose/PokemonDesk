import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <div className={s.content}>
        <p>Find all your favorite Pokemon</p>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
