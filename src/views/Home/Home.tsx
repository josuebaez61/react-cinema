import React, { useEffect, useState } from 'react'
import { Galleria } from 'primereact/galleria';
import { Movie } from '../../models/Movies';
import MovieBillboard from '../../components/MovieBillboard/MovieBillboard';
import './Home.scss'
import { useBillboard } from '../../hooks/useBillboard';
import { ProgressSpinner } from 'primereact/progressspinner';
const Home = () => {

    const { movies, genres } = useBillboard();
    const [existsData, setExistsData] = useState(false);

    useEffect(() => {
        if ( movies && genres ) {
            setExistsData(true);
        }
    }, [movies, genres])

    const itemCaption = (movie: Movie) => {
        return (
            <>
                <h4 className="p-mb-2">{movie.title}</h4>
            </>
        )
    }

    const itemTemplate = (movie: Movie) => {
        return <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} style={{ width: '100%', display: 'block' }} />
    }

    return (
        <div className="home container">
            {
                !existsData 
                ?   <div className="w-100 p-d-flex p-jc-center p-mt-5">
                        <ProgressSpinner />
                    </div>
                : (
                    <div className="animate__animated animate__fadeIn animate__slow">
                        <Galleria
                            value={ movies }
                            item={ itemTemplate }
                            // showItemNavigators
                            showThumbnails={ false }
                            circular
                            caption={ itemCaption }
                            autoPlay
                        />
                        <h1 className="home__title">En Cartelera</h1>
                        {
                            genres.map((genre) => (
                                <div key={ genre.name }>
                                    <h4 className="genre-title">{ genre.name }</h4>
                                        <div className="p-grid">
                                            {
                                                genre.movies.map((movie:Movie) => (
                                                    <div key={ movie.id } className="p-col-4 p-md-2">
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
        </div>
    )
}

export default Home
