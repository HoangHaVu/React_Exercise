import React from "react";

interface ButtonProps{
    text: string;
}

const Button : React.FunctionComponent<ButtonProps>=({text})=>{
    return (
    <button>{text}</button>
    );
}
export default Button;