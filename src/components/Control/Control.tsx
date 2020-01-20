import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import css from "./Control.scss";
import classNames from "classnames";
import Headline from "../Headline/Headline";

const Control: React.FunctionComponent = () => {

  function sortAsc(){
    console.log('asc');
  }

  function sortDesc(){
    console.log('desc');
  }

  function submit(){
    console.log('submit');
  }

  return (
    <React.Fragment>
    <Headline text={"Control"}></Headline>
    <Card>
      <nav className={css.nav}>
        <Button className={css.sortAsc}onClick={sortAsc}>sort asc</Button>
        <Button className={css.sortDesc} onClick={sortDesc}>sort desc</Button>
        <Button className={css.submit} onClick={submit}>submit</Button>
      </nav>
    </Card>
    </React.Fragment>
  );
};

export default Control;