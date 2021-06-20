import { Card } from 'primereact/card'
import React, { useEffect, useState } from 'react'
import { useMovie } from '../../hooks/useMovie'
import { Button } from 'primereact/button'
import { Badge } from 'primereact/badge';
import './MovieDetail.scss';
import { useHistory } from 'react-router'
import CounterInput from '../../components/CounterInput/CounterInput'
import { Dropdown } from 'primereact/dropdown'
import { useForm } from '../../hooks/useForm'

const Movie = () => {
    const movie = useMovie();
    const [invalidForm, setInvalidForm] = useState(true);
    const [cinemaIsRequiredError, setCinemaIsRequiredError] = useState(false);
    const history = useHistory();
    const [{ tickets, cinema }, handleChange] = useForm({
        tickets: 1,
        cinema: ''
    });

    const sucursalesProvisional = [
        {
            id: '1',
            name: 'Shopping de Palermo'
        },
        {
            id: '2',
            name: 'Shopping de San Justo'
        },
        {
            id: '3',
            name: 'Shopping de Liniers'
        },
        {
            id: '4',
            name: 'Unicenter'
        },
    ]

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if ( !cinema ) {
            setCinemaIsRequiredError(true);
            return;
        } else {
            setCinemaIsRequiredError(false);
        }
        console.log({
            tickets: Number(tickets),
            cinema
        });
        history.push('/cart');
    }

    useEffect(() => {
        console.log('Contador onAdd en MovieDetail: ', Number(tickets));
        if ( Number(tickets) < 1 || cinema.length <= 0 ) {
            setInvalidForm(true);
        } else {
            setInvalidForm(false);
        }
    }, [tickets, cinema]);

    return (
        <div className="container p-mt-3 p-mb-3">
            <Card className="p-card p-card-black">
                {
                    movie &&
                    <div className="animate__animated animate__fadeIn animate__fasters">
                        <div className="p-grid">
                            <div className="p-col-12 p-md-3">
                                <img className="w-100" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                            </div>
                            <div className="p-col-12 p-md-9">
                                <div className="p-mb-3">
                                    <h1 className="p-text-center p-text-md-left">{movie.title}</h1>
                                    <p className="p-text-center p-text-md-left">
                                        {movie.overview}
                                    </p>
                                </div>
                                <div className="p-text-center">
                                    <h5 style={{ fontSize: '1.3rem' }} className="p-mb-2">Géneros</h5>
                                    {
                                        movie.genres.map(genre =>
                                            <Badge
                                                key={genre.id}
                                                value={genre.name}
                                                severity="primary"
                                                className="p-m-1"
                                            ></Badge>
                                        )
                                    }
                                </div>
                                <form onSubmit={handleSubmit} id="reservation-form" className="p-grid p-mt-3">
                                    <div className="p-col-12 p-md-6">
                                        <div className="p-fluid">
                                            <div className="p-field">
                                                <label>Entradas - $500 x unidad</label>
                                                <br />
                                                <CounterInput
                                                    name="tickets"
                                                    minValue={1}
                                                    maxValue={10}
                                                    onChange={handleChange}
                                                    />
                                                <small className="p-d-block" style={{ color: '#cccc' }} >Cantidad disponible: 10</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-col-12 p-md-6">
                                        <div className="p-fluid">
                                            <div className="p-field">
                                                <label>Sucursal</label>
                                                <br />
                                                <Dropdown
                                                    optionValue="id"
                                                    value={cinema}
                                                    name="cinema"
                                                    optionLabel="name"
                                                    options={sucursalesProvisional}
                                                    placeholder="Elige una sucursal"
                                                    onChange={handleChange}
                                                    className={ cinemaIsRequiredError ?'p-invalid' : '' }
                                                />
                                                <small className={`${ cinemaIsRequiredError ? 'p-d-block p-error': 'p-d-none'}`}>Debe elegir una sucursal</small>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="p-card-footer">
                            <div className="p-text-right">
                                <Button
                                    icon="pi pi-arrow-left"
                                    onClick={history.goBack}
                                    className="p-button-danger p-mb-2 p-mb-md-0  p-mr-md-1 p-button-rounded w-100 w-md-auto"
                                    label="Cancelar"
                                />
                                <Button
                                    disabled={ invalidForm }
                                    loading ={ invalidForm }
                                    form="reservation-form"
                                    type="submit"
                                    icon="pi pi-shopping-cart"
                                    className="p-button-rounded w-100 w-md-auto"
                                    label={ invalidForm ? 'Elegí tus entradas' : 'Terminar Compra' }
                                />
                            </div>
                        </div>
                    </div>
                }
            </Card>
        </div>
    )
}

export default Movie
