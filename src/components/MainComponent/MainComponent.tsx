import React from 'react';

interface MainComponentProps {
    firstName : string;
    lastName : string;
    age : number;
}

const MainComponent: React.FunctionComponent<MainComponentProps> = ({firstName,lastName,age,children}) => {
    return <main>Your Data: {firstName}, {lastName}, {age}, {children}  </main>;
}

export default MainComponent;