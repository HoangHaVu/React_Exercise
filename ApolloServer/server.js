const { ApolloServer, gql } = require('apollo-server');

const filltext =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur ';

const products = [
  { id: 1, url: '/applewatch.png', productName: 'Apple Watch 5', brand: 'Apple', description: filltext, price: 599 },
  { id: 2, url: '/chanel.png', productName: 'Chanel Parfum', brand: 'Chanel', description: filltext, price: 60 },
  {
    id: 3,
    url: '/rolexwatch.png',
    productName: 'Rolex Watch',
    brand: 'Rolex',
    description: filltext,
    price: 2150,
  },
  { id: 4, url: '/hpspectre.png', productName: 'HP Spectre', brand: 'HP', description: filltext, price: 1200 },
  { id: 5, url: '/huaweip30.png', productName: 'Huawei P30 PRO', brand: 'Huawei', description: filltext, price: 799 },
  {
    id: 6,
    url: '/hugoboss.png',
    productName: 'hugo Boss Parfum',
    brand: 'Hugo Boss',
    description: filltext,
    price: 50,
  },
  { id: 7, url: '/iphone11.png', productName: 'IPhone 11', brand: 'Apple', description: filltext, price: 899 },
  { id: 8, url: '/macbook.png', productName: 'Macbook', brand: 'Apple', description: filltext, price: 1799 },
];

const resolvers = {
  Query: {
    products: () => products,
    product: (parent, args) => {
      for (prod of products) {
        if (prod.id === Number.parseInt(args.id)) {
          return prod;
        }
      }
      return null;
    },
  },
};

const schema = gql`
  type Product {
    id: ID!
    url: String
    productName: String
    brand: String
    description: String
    price: Int!
  }

  type Query {
    products: [Product]
    product(id: ID!): Product
  }
`;

const server = new ApolloServer({ typeDefs: schema, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
