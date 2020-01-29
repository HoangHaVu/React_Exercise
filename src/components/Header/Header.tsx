import React from 'react';
import css from './Header.scss';

const Header: React.FunctionComponent = () => {
  return (
    <div className={css.header}>
      <div className={css.imagewrapper}>
        <img src="/logo.png" alt="Logo" />
      </div>
    </div>
  );
};
export default Header;
