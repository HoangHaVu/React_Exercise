import React from "react";
import css from "./Layout.scss";
import Control from "../Control/Control";

const Layout: React.FunctionComponent = () => {
  return (
    <div className={css.layout}>
      <div className={css.detail}>haöllo</div>
      <div className={css.control}>
        <Control/>
      </div>
      <div className={css.overview}>nalasd</div>
    </div>
  );
};

export default Layout;
