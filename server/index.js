const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
// const { createStore } = require("./utils")

const PersonAPI = require('./datasources/person');




const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => ({
        personApi: new PersonAPI(),
    }) 

});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});