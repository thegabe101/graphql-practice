import React from 'react'
import { useQuery, gql } from '@apollo/client';

const QUERY_ALL_USERS = gql`
    query getAllUsers {
    users {
        id
        name
        age
        email
        nationality
        username
        }
    }
`

const QUERY_ALL_FILMS = gql`
        query getAllFilms {
    films {
    title
    year
    director
    ratedR
  }
}
`

export const DisplayData = () => {
    const { data, error, loading } = useQuery(QUERY_ALL_USERS);
    const { data: filmData } = useQuery(QUERY_ALL_FILMS);

    if (loading) {
        <h1>{loading}</h1>
    }

    if (data) {
        console.log(data);
    }

    if (error) {
        <h1>Sorry, an error occurred. Please refresh and try again.</h1>
    }

    return (
        <div>{data && data.users.map((e) => { return <div><h1>Name: {e.name} Username: {e.username} Email: {e.email} Age: {e.age} Nationality: {e.nationality} </h1></div> })}
            <div>
                {/* <h2>{filmData && filmData.films</h2> */}
            </div>
        </div>
    )
}
