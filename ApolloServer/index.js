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



const filltext ="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur ";


const products =[
    {id:1, url:"applewatch.png", productName:"Apple Watch 5", brand:"Apple", description:filltext, price:"599"},
    {id:2, url:"chanel.png", productName:"Chanel Parfum", brand:"Chanel", description:filltext, price:"60"},
    {id:3, url:"armaniwatch.png", productName:"Armani Watch", brand:"Emporio Armani", description:filltext, price:"150"},
    {id:4, url:"hpspectre.png", productName:"HP Spectre", brand:"HP", description:filltext, price:"1200"},
    {id:5, url:"huaweip30.png", productName:"Huawei P30 PRO", brand:"Huawei", description:filltext, price:"799"},
    {id:6, url:"hugoboss.png", productName:"hugo Boss Parfum", brand:"Hugo Boss", description:filltext, price:"50"},
    {id:7, url:"iphone11.png", productName:"IPhone 11", brand:"Apple", description:filltext, price:"899"},
    {id:8, url:"macbook.png", productName:"Macbook", brand:"Apple", description:filltext, price:"1799"}

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
