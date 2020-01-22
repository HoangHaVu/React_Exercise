const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const books = [
    {
      id:0,  
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
    { id:1,
      title: 'Jurassic Park',
      author: 'Michael Crichton',
    },
  ];

  const resolvers = {
    Query: {
      books: () => books,
      book: (parents,args)=>{    
          
        for (bk of books){
            if(bk.id===Number.parseInt(args.id)){
              return bk;
            }
        }
        return null;
      },
    },
  };
 
const schema = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    id:ID!
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    book(id: ID!): Book
    books: [Book]
  }
`;
const server = new ApolloServer({ typeDefs: schema, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});