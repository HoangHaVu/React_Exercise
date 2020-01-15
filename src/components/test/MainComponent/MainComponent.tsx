import React from 'react';
import SideComponent from "../SideComponent/SideComponent"

interface MainComponentProps {
    firstName : string;
    lastName : string;
    age : number;
}

const MainComponent: React.FunctionComponent<MainComponentProps> = ({firstName,lastName,age,children}) => {
    return <main>Your Data: {firstName}, {lastName}, {age}
        <SideComponent university="Hochschule Rhein Main" semester={7} status="Student"/>
        {children}
      </main>;
}

export default MainComponent;