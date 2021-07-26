const { gql } = require('apollo-server');

const typeDefs = gql` 
type Query {
        people(pageNo: String): [Person]
        person(personName: String): Person
        p: Person
        #ontinents(filter: { name:{ eq: "AF" }})!
        #searchName(input:searchIput ): Person !
        #feed(filter: String): Person!

    }
input searchIput{
  name: String
}
type Person {
    name: String! 
    height : String
    mass : String
    gender : String
    homeworld: String
  }

`;

module.exports = typeDefs;