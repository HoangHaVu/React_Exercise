import React, {MouseEvent, MouseEventHandler, ButtonHTMLAttributes, Children} from "react";
import classNames from "classnames";
import css from "./Button.scss"


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className:string;
}

const Button : React.FunctionComponent<ButtonProps>=({children, className, ...buttonAttributes})=>{
    return (    
        <button className={classNames([className, css.button])} {...buttonAttributes}>{children}</button>
    );
}
export default Button;