import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import css from "./Control.scss";

const Control: React.FunctionComponent = () => {
  return (
    <Card>
      <nav className={css.nav}>
        <Button className={css.sortAsc} text="sort asc"></Button>
        <Button className={css.sortDesc}text="sort desc"></Button>
        <Button className={css.submit}text="submit"></Button>
      </nav>
    </Card>
  );
};
export default Control;
