import React from 'react';
import css from './Layout.scss';
import Control from '../Control/Control';
import Detail from '../Detail/Detail';
import Overview from '../Overview/Overview';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout: React.FunctionComponent = () => {
  return (
    <div className={css.layout}>
      <div className={css.header}>
        <Header />
      </div>
      <div className={css.detail}>
        <Detail />
      </div>
      <div className={css.control}>
        <Control />
      </div>
      <div className={css.overview}>
        <Overview />
      </div>
      <div className={css.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
