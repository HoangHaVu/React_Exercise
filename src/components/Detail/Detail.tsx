import React, {useContext} from "react";
import Card from "../Card/Card";
import Character from "../Character/Character";
import Headline from "../Headline/Headline";
import DataContext from "../../data/Context";

export type CharacterType = {
  playerName: string;
  realName: string;
  asset: string;
};

const Detail: React.FunctionComponent = () => {
  const context=useContext(DataContext.DataContext);
  const selected =context.selectedCard
  return (
    <React.Fragment>
    <Headline text={"Detail"}></Headline>
    <Card>
      <Character  playerName={selected.playerName} realName={selected.realName} asset={selected.asset}/>
    </Card>
    </React.Fragment>
  );
};
export default Detail;
