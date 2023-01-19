//this is where we will define the schema for our API

const { gql } = require('apollo-server');


//very weird syntax here. the code needs to be written inside of a literal string template. we can get intellisense from apollo graphql extension
//important to remember that diff from SQL graphql has a basic type called ID 
//query type is the "first level" of the graph
//enums super useful to prevent failures of non spac parameters sneaking in
const typeDefs = gql`

    enum Nationality {
        USA
        CHINA 
        JORDAN 
        NIGERIA
    }

    type User {
        id: ID!
        name: String!
        username: String!
        email: String!
        age: Int!
        nationality: Nationality
        friends: [User]
    }

    type Film {
        id: ID!
        title: String!
        year: Int!
        director: String
        ratedR: Boolean!
    }

    type Query {
        users: [User!]!
        user(id:ID!): User!
        films: [Film!]!
        film(title:String!): Film!
    }

`;


//notice the passing of the argument of id for querying a specific user. this is important for specificity; also notice that it is made required
//further notice that user returned is not bracketed, because here we are intending to return a single user. 
module.exports = { typeDefs };