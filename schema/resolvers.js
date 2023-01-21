//here we write all of the resolvers that make calls to our API
const { UsersList, FilmsList } = require('../data.js');
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
        films() {
            return FilmsList;
        },
        film(parent, args) {
            const title = args.title;
            const film = _.find(FilmsList, { title: String(title) });
            return film;
        }
    },
    User: {
        favoriteFilms() {
            return _.filter(
                FilmsList, (film) => film.year >= 2000
            )
        }
    },
    Mutation: {
        createUser(parent, args) {
            const user = args.input;
            const lastId = UsersList[UsersList.length - 1].id;
            user.id = lastId + 1;
            UsersList.push(user);
            console.log(user);
            return user;
        },
        updateUsername(parent, args) {
            let newUser;
            const userId = args.input.id;
            const newUsername = args.input.newUsername;
            UsersList.forEach((user) => {
                if (user.id = userId) {
                    user.username = newUsername;
                    newUser = user
                };
            });
            return newUser;
        },
    },
};

module.exports = { resolvers }