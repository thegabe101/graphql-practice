//this is where we will define the schema for our API

const { gql } = require('apollo-server');


//very weird syntax here. the code needs to be written inside of a literal string template. we can get intellisense from apollo graphql extension
//important to remember that diff from SQL graphql has a basic type called ID 
//query type is the "first level" of the graph
const typeDefs = gql`

    type User {
        id: ID!
        name: String!
        username: String!
        email: String!
        age: Int!
        nationality: String
    }

    type Query {
        users: [User!]!
    }

`;