const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { typeDefs, resolvers } = require('../Backend/server');
const db = require('../Backend/server/config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Apply Apollo Server as middleware to Express app
server.applyMiddleware({ app });

// Serve static assets in production (if needed)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

// Start the server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});

 
