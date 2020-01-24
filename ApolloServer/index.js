const { ApolloServer, gql } = require('apollo-server');

const heros = [
    { id:1 ,playerName: "hallo", realName: "hallo", asset: "blaabla" },
    { id:2 ,playerName: "b", realName: "b", asset: "b" },
    { id:3 ,playerName: "c", realName: "c", asset: "c" },
    { id:4 ,playerName: "d", realName: "d", asset: "d" },
    { id:5 ,playerName: "e", realName: "e", asset: "e" },
    { id:6 ,playerName: "f", realName: "f", asset: "f" },
    { id:7 ,playerName: "g", realName: "g", asset: "g" },
    { id:8 ,playerName: "h", realName: "h", asset: "h" }
  ];


  const resolvers ={
      Query:{
          heros: () =>heros,
          hero:(parents,args)=>{
              for(hero of heros){
                  if(hero.id===Number.parseInt(args.id)){
                      return hero;
                  }
              }
              return null;
          },
      },
  };

  const schema = gql`

  type Hero{
    id:ID!
    playerName: String
    realName: String
    asset: String
  }

  type Query {
    heros: [Hero]
    hero(id:ID!): Hero
    }
  
  `;

  const server = new ApolloServer({typeDefs: schema,resolvers});

  server.listen().then(({url})=>{
      console.log(`🚀  Server ready at ${url}`);
  });
