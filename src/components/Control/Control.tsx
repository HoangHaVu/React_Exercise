import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";

const Control: React.FunctionComponent = () => {
  return (
    <Card>
      <nav>
        <Button text="sort asc"></Button>
        <Button text="sort desc"></Button>
        <Button text="submit"></Button>
      </nav>
    </Card>
  );
};
export default Control;
