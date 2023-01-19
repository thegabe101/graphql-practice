//entrypoint for the API here
const { ApolloServer } = require('apollo-server');











//every piece of data will be passed into typedefs, and all of the functions that resolve those types or make calls to API will be enclosed inside of resolvers 
const server = new ApolloServer({ typeDefs, resolvers });


//can destructure url from object here to pass as console message 
server.listen().then(({ url }) => {
    console.log(`Server is online. API up at ${url}`)
});