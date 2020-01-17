import React from "react";
import Card from "../Card/Card";
import Character from "../Character/Character";

type CharacterType = {
  playerName: string;
  realName: string;
  asset: string;
};

const Overview: React.FunctionComponent = () => {
  const characters: Array<CharacterType> = [
    { playerName: "a", realName: "a", asset: "a" },
    { playerName: "b", realName: "b", asset: "b" },
    { playerName: "c", realName: "c", asset: "c" },
    { playerName: "d", realName: "d", asset: "d" },
    { playerName: "e", realName: "e", asset: "e" },
    { playerName: "f", realName: "f", asset: "f" }
  ];
  return (
    <Card>
      <h1>Overview</h1>
      {characters &&
        characters.map(char => {
          return (
            <Character
              playerName={char.playerName}
              realName={char.realName}
              asset={char.asset}
            />
          );
        })}
    </Card>
  );
};
export default Overview;
