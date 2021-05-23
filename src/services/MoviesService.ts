import Axios from 'axios';

export const theMovieDBAxios = Axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    timeout: 1000,
    params: {
        api_key: '33245a5fba7fb336ade8ee090f3ee97e',
        languaje: 'es-MX'
    }
});

export class MoviesService {
    static getNowPlaying() {
        return theMovieDBAxios.get('/movie/now_playing').then(({data}) => data);
    }
}