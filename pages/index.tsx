import React from "react";
import Layout from "../src/components/Layout/Layout";
import DataContext from "../src/data/Context";
import {ApolloProvider} from "@apollo/react-hooks";
import client from "../src/ApolloClient/apollo_client"



const Page: React.FunctionComponent = () => {
  return (
  <ApolloProvider client ={client}>
  <DataContext.Provider value={[]} sortContextAsc={()=>{}} sortContextDesc={()=>{}} submitContext={()=>{}}>
  <Layout/>
  </DataContext.Provider>
  </ApolloProvider>  
  );
};
export default Page;
