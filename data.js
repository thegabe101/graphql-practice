const UsersList = [
    {
        id: 1,
        name: 'Gabe',
        username: 'thegabe101',
        age: 32,
        email: 'gabe@gmail.com',
        nationality: 'USA',
        friends: [
            {
                id: 2,
                name: 'Cassandra',
                username: 'casstravels14',
                age: 56,
                email: 'cass@gmail.com',
                nationality: 'NIGERIA',
                friends: []
            },
            {
                id: 5,
                name: 'Casey',
                username: 'caseyGar',
                age: 87,
                email: 'casey@gmail.com',
                nationality: null,
                friends: []
            }
        ]
    },
    {
        id: 2,
        name: 'Cassandra',
        username: 'casstravels14',
        age: 56,
        email: 'cass@gmail.com',
        nationality: 'NIGERIA',
        friends: []
    },
    {
        id: 3,
        name: 'Zhu Liu',
        username: 'liuFlies666',
        age: 21,
        email: 'liuZhu@gmail.com',
        nationality: 'CHINA',
        friends: []
    },
    {
        id: 4,
        name: 'Fastid',
        username: 'fs923user',
        age: 28,
        email: 'fastid@gmail.com',
        nationality: 'JORDAN',
        friends: []
    },
    {
        id: 5,
        name: 'Casey',
        username: 'caseyGar',
        age: 87,
        email: 'casey@gmail.com',
        nationality: null,
        friends: []
    }

];


const FilmsList = [
    {
        id: 1,
        title: 'Jurassic Park',
        year: 1993,
        director: 'Steven Spielberg',
        ratedR: false
    },
    {
        id: 2,
        title: 'Pan\'s Labryrinth',
        year: 2006,
        director: 'Guillermo del Toro',
        ratedR: true
    },
    {
        id: 3,
        title: 'Toy Story',
        year: 1995,
        director: 'John Lasseter',
        ratedR: false
    },
    {
        id: 4,
        title: 'Requiem for a Dream',
        year: 200,
        director: 'Darren Aronofsky',
        ratedR: true
    },
    {
        id: 5,
        title: 'The Menu',
        year: 2022,
        director: 'Mark Mylod',
        ratedR: true
    },
]

module.exports = { UsersList, FilmsList }