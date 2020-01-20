import React from "react";
import css from "./Headline.scss";

interface HeadlineProps{
    text:string;
}

const Headline: React.FunctionComponent <HeadlineProps>= ({text}) => {
  return (
  <div className={css.headline}>{text}</div>
  );
};

export default Headline;
