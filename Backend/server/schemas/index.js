// backend/graphql/index.js

const { ApolloServer } = require('apollo-server-express'); // or another GraphQL server library
const express = require('express');
const typeDefs = require('./typeDefs'); // Import your type definitions
const resolvers = require('./resolvers'); // Import your resolvers

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
