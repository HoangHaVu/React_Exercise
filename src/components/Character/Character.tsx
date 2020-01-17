import React from "react";
import css from "./Character.scss"

interface CharacterProps{
    playerName: string;
    realName: string;
    asset: string;
}

const Character : React.FunctionComponent<CharacterProps>=({playerName,realName,asset})=>{
    return (
        <ul className={css.list}>
            <li>Player Name: {playerName}</li>
            <li>Real Name:{realName}</li>
            <li>Asset:{asset}</li>
        </ul>
    );
}
export default Character;