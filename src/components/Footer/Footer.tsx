import React from 'react';
import cn from 'classnames';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={cn(s.footer)}>
      <p>
        Make with{' '}
        <span role="img" aria-label="Love">
          ❤️
        </span>
      </p>
    </footer>
  );
};

export default Footer;
