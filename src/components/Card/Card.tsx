import React from "react";
import css from "./Card.scss";





const Card: React.FunctionComponent = ({ children}) => {
  return (
    <div className={css.card}>
      <div className={css.wrapper} >{children}</div>
    </div>
  );
};
export default Card;
