const { GraphQLServer } = require("graphql-yoga");

const typeDefs = `
    type Query {
        helloWorld: String!
    }
`;

const resolvers = {
  Query: {
    helloWorld: () => "Hello world!"
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start();
