const { resolvers } = require('./schema/resolvers');

//note that require doesnt work here- needs to be imported non node modularly

const renderSpace = document.getElementById('renderSpace');

const data = { resolvers };

function log() {
    console.log('hello')
    console.log(data.resolvers.Query.users);
};

log();
