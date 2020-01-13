import React from "react";
import MainComponent from "../src/components/MainComponent/MainComponent";

const Page: React.FunctionComponent = () => {
  return (
    <MainComponent firstName="hallo" lastName="Hoang" age={23}>
      <h1>hallo</h1>
    </MainComponent>
  );
};
export default Page;
