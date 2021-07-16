import Axios from 'axios';
import { GenresResponse } from '../models/Genre';
import { MovieDetail, NowPlayingResponse, SearchResponse } from '../models/Movies';

export const theMovieDBAxios = Axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    timeout: 1000,
    params: {
        api_key: '33245a5fba7fb336ade8ee090f3ee97e',
        language: 'es-MX'
    }
});

export class MoviesService {
    static getNowPlaying(): Promise<NowPlayingResponse> {
        return theMovieDBAxios.get('/movie/now_playing').then(({data}) => data);
    }

    static getGenres(): Promise<GenresResponse> {
        return theMovieDBAxios.get('/genre/movie/list').then(({data}) => data);
    }

    static getMovieById(id: string | number): Promise<MovieDetail> {
        return theMovieDBAxios.get(`/movie/${id}`).then(({data}) => data);
    }

    static searchMovies(query: string, page: number): Promise<SearchResponse> {
        return theMovieDBAxios.get(`/search/movie${query}`, {
            params: {
                page
            }
        }).then(({data}) => data)
    }
}