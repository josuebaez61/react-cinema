import { Card } from 'primereact/card'
import React from 'react'
import { useHistory } from 'react-router'
import { Movie } from '../../models/Movies'
import './MovieBillboard.scss'

interface MovieBillboardProps {
    movie: Movie
}

const MovieBillboard = ({ movie }: MovieBillboardProps) => {

    const history = useHistory();

    const posterHeader = () => {
        return <img src={ `https://image.tmdb.org/t/p/w500${movie.poster_path}` } alt={ movie.title } />
    }

    return (
            <div onClick={ () => history.push(`/movie/${ movie.id }`) } style={{ cursor: 'pointer' }}>
                <Card className="movie-billboard w-100" title={ movie.title } header={ posterHeader }></Card>
            </div>
    )
}

export default MovieBillboard
