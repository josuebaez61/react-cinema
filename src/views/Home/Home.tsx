import React, { useEffect } from 'react'
import { Card } from 'primereact/card';
import { MoviesService } from '../../services/MoviesService';
import { useDispatch } from 'react-redux';
import { fetchNowPlaying } from '../../store/actions/moviesActions';
const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNowPlaying());
    }, [])
    return (
        <div className="container">
            <Card className="p-card-black no-radius">
                <h1>Cartelera</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores velit eos voluptatibus praesentium animi quaerat fuga accusantium assumenda esse, nihil impedit quo tempore odio ratione temporibus est earum dignissimos. Vitae.</p>
            </Card>
        </div>
    )
}

export default Home
