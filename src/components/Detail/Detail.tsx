import React from "react";
import Card from "../Card/Card";
import Character from "../Character/Character";

const Detail: React.FunctionComponent = () => {
  return (
    <Card>
      <h1>Detail</h1>
      <Character playerName="Hongii" realName="Hoang" asset="blablabla"/>
    </Card>
  );
};
export default Detail;
