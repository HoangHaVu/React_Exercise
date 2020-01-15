import React from "react";

interface CharacterProps{
    playerName: string;
    realName: string;
    asset: string;
}

const Character : React.FunctionComponent<CharacterProps>=({playerName,realName,asset})=>{
    return (
        <ul>
            <li>{playerName}</li>
            <li>{realName}</li>
            <li>{asset}</li>
        </ul>
    );
}
export default Character;