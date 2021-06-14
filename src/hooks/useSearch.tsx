import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { MoviesService } from '../services/MoviesService';
import queryString from 'query-string';
import { Movie } from "../models/Movies";

export const useSearch = () => {
    const [results, setResults] = useState<Movie[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const [totalResults, setTotalResults] = useState(0);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const location = useLocation();

    useEffect(() => {
        const qString = queryString.parse(location.search).query;
        setQuery( qString && !Array.isArray(qString) ? qString : '' );
        MoviesService.searchMovies(location.search, page)
        .then(data => {
            console.log(data);
            setResults(data.results)
            setPage(data.page);
            setTotalPages(data.total_pages);
            setTotalResults(data.total_results);
        });
    }, [location, page]);

    return {
        totalPages,
        results,
        page,
        setPage,
        query,
        totalResults
    }
}