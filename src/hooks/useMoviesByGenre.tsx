import { RootState } from '../store';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { fetchGenres } from '../store/actions/genresActions';



export const useMoviesByGenre = () => {
    const dispatch = useDispatch();
    const { results: movies } = useSelector((state: RootState) => state.movies);
    const { genres } = useSelector((state: RootState) => state.genres);
    const [moviesByGenre, setMoviesByGenre] = useState([]);

    useEffect(() => {
        dispatch(fetchGenres());
    }, [])

    useEffect(() => {
        const moviesByGenre: any = genres.map( genre => ({...genre, movies: []}));
        for (const genre of genres) {
            for (const movie of movies) {
                if(movie.genre_ids.includes(genre.id)) {
                    const index:any = moviesByGenre.findIndex( (x:any) => x.id === genre.id);
                    moviesByGenre[index].movies.push(movie);
                }
            }
        }
        setMoviesByGenre(moviesByGenre);
    }, [genres])
    return moviesByGenre;
}