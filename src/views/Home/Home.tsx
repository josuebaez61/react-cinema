import React, { useEffect } from 'react'
import { Card } from 'primereact/card';
import { Galleria } from 'primereact/galleria';
import { fetchNowPlaying } from '../../store/actions/moviesActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Movie } from '../../models/Movies';
import { useMoviesByGenre } from '../../hooks/useMoviesByGenre';
import MovieBillboard from '../../components/MovieBillboard/MovieBillboard';
import './Home.scss'
const Home = () => {

    const { results: movies } = useSelector((state: RootState) => state.movies);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchNowPlaying());
    }, []);

    const moviesByGenre = useMoviesByGenre();


    const itemCaption = (movie: Movie) => {
        return (
            <>
                <h4 className="p-mb-2" style={{ fontSize: "2rem" }}>{movie.title}</h4>
            </>
        )
    }

    const itemTemplate = (movie: Movie) => {
        return <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} style={{ width: '100%', display: 'block' }} />
    }

    return (
        <div className="container">
            <Galleria
                value={movies}
                item={itemTemplate}
                showItemNavigators
                showThumbnails={false}
                circular
                caption={itemCaption}
                autoPlay
            />
            <h1 className="home-title">En Cartelera</h1>
            {
                moviesByGenre.filter( (genre: any) => genre.movies.length > 0 ).map((genre: any) => (
                    <div key={genre.name}>
                        <h4 className="genre-title">{genre.name}</h4>
                            <div className="p-grid">
                                {
                                    genre.movies.map((movie:Movie) => (
                                        <div className="p-col-2">
                                            <MovieBillboard movie={ movie }/>
                                        </div>
                                    ))
                                }
                            </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Home
