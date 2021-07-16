import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { MovieDetail } from "../models/Movies";
import { MoviesService } from "../services/MoviesService";

export const useMovie = () => {
    const [currentMovie, setCurrentMovie] = useState<MovieDetail>();
    let { id } = useParams<{ id: string }>();
    const history = useHistory();

    useEffect(() => {
        id && MoviesService.getMovieById(id)
            .then((movie) => setCurrentMovie(movie))
            .catch( err => {
                history.push('/not-found')
            });
    }, [id])
    return currentMovie;
}