//here we write all of the resolvers that make calls to our API
const { UsersList } = require('../data.js');
const _ = require('lodash');
//parent gives us a value that was resolved in the chain of ql types 
//to skip it, we can pass ___ to get to next value (args)
//use lodash to delve array and get .find method; peruse list; id will be set to the const set by user input args
//watch out for string conversion on id number >>> string 
const resolvers = {
    Query: {
        users() {
            return UsersList;
        },
        user(parent, args) {
            const id = args.id;
            const user = _.find(UsersList, { id: Number(id) });
            return user;
        },
    },
};

module.exports = { resolvers }