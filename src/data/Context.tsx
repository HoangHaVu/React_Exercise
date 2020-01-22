import React, {useState, useEffect}from "react";
import { useQuery, useApolloClient } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const QUERY = gql`
  query {
    heros {
      playerName
      realName
      asset
    }
  }
`;

export type CharacterType = {
  playerName: string;
  realName: string;
  asset: string;
};

interface Heros {
  heros: CharacterType[];
}

interface ContextProps {
  value: CharacterType[];
  sortContextDesc: Function;
  sortContextAsc: Function;
  submitContext: Function;
  getDataContext: Function;
}

const DataContext = React.createContext<ContextProps>({
  value: [],
  sortContextDesc: () => {},
  sortContextAsc: () => {},
  submitContext: () => {},
  getDataContext: () => {}
});

const Provider: React.FunctionComponent<ContextProps> = ({ children }) => {
  const [state,newData]=useState([]);
  const client = useApolloClient();
  // const { loading, error, data } = useQuery<Heros>(QUERY);
  // if (loading) {
  //   return <div>loading</div>; // TO DO Implementing Loading Page
  // }
  useEffect(() => {
    client.query<Heros>({query: QUERY}).then(result => newData(() => result.data.heros));
  }, [])
 
  const sortAsc = () => {
    let sortArray = [...state];
    sortArray.sort(function(a, b) {
      var nameA = a.realName.toUpperCase(); // Groß-/Kleinschreibung ignorieren
      var nameB = b.realName.toUpperCase(); // Groß-/Kleinschreibung ignorieren
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // Namen müssen gleich sein
      return 0;
    });

    newData(sortArray);
  };

  const sortDesc = () => {
    let sortArray = [...state];
    sortArray.sort(function(a, b) {
      var nameA = a.realName.toUpperCase(); // Groß-/Kleinschreibung ignorieren
      var nameB = b.realName.toUpperCase(); // Groß-/Kleinschreibung ignorieren
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }

      // Namen müssen gleich sein
      return 0;
    });
    newData(sortArray);
  };
  const submit = () => {};

  const getData = () => {
    
    return state;
  };

  return (
    <DataContext.Provider
      value={{
        value: state!,
        sortContextAsc: sortAsc,
        sortContextDesc: sortDesc,
        submitContext: submit,
        getDataContext: getData
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default { DataContext, Provider };
