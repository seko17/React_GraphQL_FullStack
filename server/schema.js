const { gql } = require('apollo-server');

const typeDefs = gql` 
type Query {
        people: [Person]
        person(name: ID!): Person
    }
type Person {
    name: String
    height : String
    mass : String
    gender : String
    homeworld: String
  }

`;

module.exports = typeDefs;