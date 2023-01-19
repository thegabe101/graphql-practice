//here we write all of the resolvers that make calls to our API
const { UsersList } = require('../data.js');


const resolvers = {
    Query: {
        users() {
            return UsersList;
        }
    }
};

module.exports = { resolvers }