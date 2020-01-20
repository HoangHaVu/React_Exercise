import React from "react";
import Card from "../Card/Card";
import Character from "../Character/Character";
import Headline from "../Headline/Headline";

const Detail: React.FunctionComponent = () => {
  return (
    <React.Fragment>
    <Headline text={"Detail"}></Headline>
    <Card>
      <Character  playerName="Hongii" realName="Hoang" asset="blablabla"/>
    </Card>
    </React.Fragment>
  );
};
export default Detail;
