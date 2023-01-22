import React from 'react'
import { useQuery, gql, useLazyQuery } from '@apollo/client';
import { useState } from 'react';

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

const QUERY_ONE_FILM = gql`
        query GetAFilm($title: String!) {
            film(title: $title){
            title
            director
            year
            ratedR
        }
}
`

export const DisplayData = () => {
    const { data, error, loading } = useQuery(QUERY_ALL_USERS);
    const { data: filmData } = useQuery(QUERY_ALL_FILMS);
    const [grabMovie, { data: movieSearchData, error: movieError }] = useLazyQuery(QUERY_ONE_FILM);
    const [movieSearch, setMovieSearch] = useState('');



    if (loading) {
        <h1>{loading}</h1>
    }

    if (data) {
        // console.log(data);
        // console.log(filmData);
    }

    if (movieSearchData) {
        console.log(movieSearchData)
    }

    if (error) {
        <h1>Sorry, an error occurred. Please refresh and try again.</h1>
    }

    if (movieError) {
        console.log(movieError);
    }


    return (
        <div>{data && data.users.map((e) => { return <div><h1>Name: {e.name} Username: {e.username} Email: {e.email} Age: {e.age} Nationality: {e.nationality} </h1></div> })}
            <div>
                <h2>{filmData && filmData.films.map((e) => { return <div>Title: {e.title} Year: {e.year} Director: {e.director} Rated R? {e.ratedR === true ? <h2>This film is rated R.</h2> : <h2>For all audiences.</h2>} </div> })}</h2>
            </div>
            <div>
                <input type="text" placeholder="Movie you want to search" onChange={(e) => { setMovieSearch(e.target.value) }} />
                <button onClick={() => {
                    grabMovie({
                        variables: {
                            title: movieSearch
                        }
                    })
                }}>Search for movie</button>
            </div>
            <div>
                {movieError && (<h1>Sorry, movie does not exist in database.</h1>)}
                {movieSearchData && (<h1>Movie searched: {movieSearchData.film.title} {movieSearchData.film.year} {movieSearchData.film.director} {movieSearchData.film.ratedR}</h1>)}
            </div>
        </div>
    )
}
