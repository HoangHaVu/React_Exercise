import React from "react";

interface ButtonProps{
    text: string;
    className:string;
}

const Button : React.FunctionComponent<ButtonProps>=({text,className})=>{
    return (
    <button className={className}>{text}</button>
    );
}
export default Button;