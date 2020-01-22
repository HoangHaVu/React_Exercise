import React, { useContext } from "react";
import Card from "../Card/Card";
import Character from "../Character/Character";
import Headline from "../Headline/Headline";
import css from "./Overview.scss";
import DataContext from "../../data/Context";


const Overview: React.FunctionComponent = () => {
  const context=useContext(DataContext.DataContext);
  const characters=context.value;
  console.log(characters);
  
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
