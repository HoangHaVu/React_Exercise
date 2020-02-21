import React from 'react';
import css from './Header.scss';
import Link from 'next/link';

const Header: React.FunctionComponent = () => {
  return (
    <div className={css.header}>
      <div className={css.imagewrapper}>
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className={css.links}>
        <Link href="/ReleaseCalender" as="/ReleaseCalender">
          <a>ReleaseCalender</a>
        </Link>
        <Link href="/News" as="/News">
          <a>News</a>
        </Link>
        <Link href="/Styles" as="/Styles">
          <a>Styles</a>
        </Link>
      </div>
    </div>
  );
};
export default Header;
