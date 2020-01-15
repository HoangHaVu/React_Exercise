import React from "react";
import Character from "../Character/Character";
import css from "./Card.scss"


const Card : React.FunctionComponent=({children})=>{
    return (
    <div className={css.card}>{children}</div>
    );
}
export default Card;