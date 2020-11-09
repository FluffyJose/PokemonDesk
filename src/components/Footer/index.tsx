import React from 'react';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.root}>
      <p className={s.footerText}>
        Make with{' '}
        <span role="img" aria-label="Love">
          ❤️
        </span>
      </p>
      <p className={s.footerText}>Ours Team</p>
    </footer>
  );
};

export default Footer;
