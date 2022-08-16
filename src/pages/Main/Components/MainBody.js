import React from 'react';
import Feed from './Feed';
import styles from '../Main.module.scss';

const MainBody = () => {
  return (
    <main id="main" className={`${styles['main-setting']}`}>
      <Feed />
      <Feed />
      <Feed />
    </main>
  );
};

export default MainBody;
