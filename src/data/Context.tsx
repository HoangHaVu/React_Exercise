import React from "react";
import {useQuery} from "@apollo/react-hooks";
import {gql} from "apollo-boost";

const QUERY =gql `
query{
  heros{
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

interface ContextProps{
    value:CharacterType[];
    sortContextDesc:Function;
    sortContextAsc:Function;
    submitContext:Function;
}

const characters: Array<CharacterType> = [
    { playerName: "a", realName: "a", asset: "a" },
    { playerName: "b", realName: "b", asset: "b" },
    { playerName: "c", realName: "c", asset: "c" },
    { playerName: "d", realName: "d", asset: "d" },
    { playerName: "e", realName: "e", asset: "e" },
    { playerName: "f", realName: "f", asset: "f" },
    { playerName: "g", realName: "g", asset: "g" },
    { playerName: "h", realName: "h", asset: "h" }
  ];

const DataContext = React.createContext<ContextProps>({
    value:[],
    sortContextDesc: () => {},
    sortContextAsc: ()=> {},
    submitContext: () => {}

});
// interface ProviderProps{
//     value:Array<CharacterType>
//     sortContextDesc:Function;
//     sortContextAsc:Function;
//     submitContext:Function; 
// }
const Provider:React.FunctionComponent<ContextProps>=({children})=>{
    

    const {loading,error,data} = useQuery<Heros>(QUERY);
    if(loading){
      return <div>loading</div>;
    }
    console.log(data,loading);
    const sortAsc=()=>{
        let sortArray = [...characters];
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
       
        return sortArray;  
    }

    const sortDesc=()=>{
        let sortArray = [...characters];
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
        
          return sortArray;
    }
    const submit=()=>{

    }


return <DataContext.Provider value={{value:data.heros!,sortContextAsc:sortAsc,sortContextDesc:sortDesc,submitContext:submit}}>{children}</DataContext.Provider>
};



export default {DataContext, Provider};