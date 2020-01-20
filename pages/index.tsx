import React from "react";
import Layout from "../src/components/Layout/Layout";
import DataContext from "../src/data/Context";




const Page: React.FunctionComponent = () => {
  return (
  <DataContext.Provider value={[]} sortContextAsc={()=>{}} sortContextDesc={()=>{}} submitContext={()=>{}}>
  <Layout/>
  </DataContext.Provider>
  );
};
export default Page;
