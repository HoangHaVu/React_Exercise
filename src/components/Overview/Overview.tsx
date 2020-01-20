import React from "react";
import Card from "../Card/Card";
import Character from "../Character/Character";
import Headline from "../Headline/Headline";
import css from "./Overview.scss";

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
    { playerName: "f", realName: "f", asset: "f" },
    { playerName: "g", realName: "g", asset: "g" },
    { playerName: "h", realName: "h", asset: "h" }
    
  ];
  return (
    <React.Fragment>
      <Headline text={"Overview"}></Headline>
      <div className={css.cardslayout}>
        {characters &&
          characters.map(char => {
            return (
              <div className={css.card}>
              <Card>
              <Character
                playerName={char.playerName}
                realName={char.realName}
                asset={char.asset}
              />
              </Card>
              </div>  
            );
          })}
      </div>
    </React.Fragment>
  );
};
export default Overview;
