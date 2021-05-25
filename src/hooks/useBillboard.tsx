import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Movie } from "../models/Movies";
import { Genre } from "../models/Genre";
import { RootState } from "../store";
import { fetchGenres } from "../store/actions/genresActions";
import { fetchNowPlaying } from "../store/actions/moviesActions";


interface GenreWithMovies extends Genre {
    movies: Movie[];
}

interface BillboardState {
    movies: Movie[];
    genres: GenreWithMovies[]
}

const initialState: BillboardState = {
    movies: [],
    genres: []
}

export const useBillboard = () => {
    const { movies: { results: movies }, genres: { genres } } = useSelector((state: RootState) => state);
    const [billboard, setBillboard] = useState(initialState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNowPlaying());
        dispatch(fetchGenres());
    }, [dispatch]);

    useEffect(() => {
        if (movies.length > 0 && genres.length > 0) {
            const genreWithMoviesArray: GenreWithMovies[] = genres.map(genre => ({ ...genre, movies: [] }));
            for (let i = 0; i < genres.length; i++) {
                for (const movie of movies) {
                    if (movie.genre_ids.includes(genres[i].id)) {
                        genreWithMoviesArray[i].movies.push(movie);
                    }
                }
            }
            setBillboard(state => ({
                ...state,
                movies: movies,
                genres: genreWithMoviesArray.filter(genre => genre.movies.length > 0)
            }))
        }
    }, [movies, genres])

    return billboard;
}