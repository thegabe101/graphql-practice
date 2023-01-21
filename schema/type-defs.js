//this is where we will define the schema for our API

const { gql } = require('apollo-server');


//very weird syntax here. the code needs to be written inside of a literal string template. we can get intellisense from apollo graphql extension
//important to remember that diff from SQL graphql has a basic type called ID 
//query type is the "first level" of the graph
//enums super useful to prevent failures of non spac parameters sneaking in

//notice that in mutations the logic comes in the resolver; the return for the mutation is just the updated value - can also use an input, which ill do here
//dont need to pass an id in an input; do notice you can pass a default value
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
        age: Int
        nationality: Nationality
        friends: [User]
        favoriteFilms: [Film]
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

    input CreateUserInput {
        name: String!
        username: String!
        email: String!
        age: Int!
        nationality: Nationality = USA
    }

    input CreateFilmInput {
        title: String!
        year: Int!
        director: String
        ratedR: Boolean!
    }

    input UpdateUsernameInput {
        id: ID!
        newUsername: String!
    }

    type Mutation {
        createUser(input: CreateUserInput!): User
        updateUsername(input: UpdateUsernameInput!): User
        createFilm(input: CreateFilmInput!): Film 
    }

`;


//notice the passing of the argument of id for querying a specific user. this is important for specificity; also notice that it is made required
//further notice that user returned is not bracketed, because here we are intending to return a single user. 
module.exports = { typeDefs };