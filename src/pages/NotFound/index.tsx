import { navigate } from 'hookrouter';
import React from 'react';
import Button from '../../components/Button';

import TeamRocket from './assets/TeamRocket.png';

import s from './NotFound.module.scss';

const NotFoundPage = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.text}>404</div>
        <div className={s.layer}>
          <img src={TeamRocket} alt="Team Rocket" className={s.image} />
          <div className={s.subTitle}>
            <span>The rocket team</span> has won this time.
          </div>
          <Button isYellow isSmallButton onClick={() => navigate('/')}>
            Return
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
