import { Card } from 'primereact/card'
import React from 'react'
import { Movie } from '../../models/Movies'
import './MovieBillboard.scss'

interface MovieBillboardProps {
    movie: Movie
}

const MovieBillboard = ({ movie }: MovieBillboardProps) => {

    const posterHeader = () => {
        return <img src={ `https://image.tmdb.org/t/p/w500${movie.poster_path}` } alt={ movie.title } />
    }

    return (
            <Card className="movie-billboard w-100" title={ movie.title } header={ posterHeader }></Card>
    )
}

export default MovieBillboard
