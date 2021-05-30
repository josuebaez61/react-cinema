import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MovieDetail } from "../models/Movies";
import { MoviesService } from "../services/MoviesService";

export const useMovie = () => {
    const [currentMovie, setCurrentMovie] = useState<MovieDetail>();
    const { id } = useParams<{ id: string }>()
    useEffect(() => {
        id && MoviesService.getMovieById( id )
            .then((movie) => setCurrentMovie(movie));
    }, [id])
    return currentMovie;
}