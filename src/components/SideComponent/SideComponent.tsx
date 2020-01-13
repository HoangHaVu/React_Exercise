import React from 'react';

interface SideComponentProps {
    university : string;
    status : string;
    semester : number;
}

const SideComponent: React.FunctionComponent<SideComponentProps> = ({university,status,semester}) => {
    return <main>Your Side Data:  UNI: {university}, Status: {status}, Semester: {semester}  </main>;
}

export default SideComponent;