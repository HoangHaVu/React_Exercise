import React from "react";
import Button from "../Button/Button"

const Control : React.FunctionComponent=()=>{
    return (
        <nav>
            <Button text="sort asc"></Button>
            <Button text = "sort desc"></Button>
            <Button text="submit"></Button>


        </nav>
    );
}
export default Control;