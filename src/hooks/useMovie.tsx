import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { useParams } from "react-router";
import { Movie, MovieDetail } from "../models/Movies";
import { MoviesService } from "../services/MoviesService";
import { RootState } from "../store";

export const useMovie = () => {
    const [currentMovie, setCurrentMovie] = useState<MovieDetail>();
    const { id } = useParams<{ id: string }>()
    useEffect(() => {
        id && MoviesService.getMovieById( id )
            .then((movie) => setCurrentMovie(movie));
    }, [id])
    return currentMovie;
}