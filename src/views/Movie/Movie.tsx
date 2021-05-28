import { Card } from 'primereact/card'
import React, { useEffect } from 'react'
import { useMovie } from '../../hooks/useMovie'
import { Divider } from 'primereact/divider'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Badge } from 'primereact/badge';
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import './Movie.scss';
import { useHistory } from 'react-router'

const Movie = () => {
    const movie = useMovie();
    const { genres } = useSelector((state: RootState) => state.genres);
    const history = useHistory();

    return (
        <div className="container p-mt-3 p-mb-3">
            <Card className="p-card p-card-black">
                {
                    movie && genres &&
                    < >
                        <div className="p-grid">
                            <div className="p-col-12 p-md-3">
                                <img className="w-100" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                            </div>
                            <div className="p-col-12 p-md-9">
                                <div className="p-mb-3">
                                    <h1 className="p-text-center">{movie.title}</h1>
                                    <p className="p-text-center">
                                        {movie.overview}
                                    </p>
                                </div>
                                <div className="p-text-center">
                                    <h5 style={{ fontSize: '1.3rem' }} className="p-mb-2">Géneros</h5>
                                    
                                    {
                                        movie.genres.map( genre =>
                                            <Badge
                                                key={ genre.id }
                                                value={ genre.name }
                                                severity="primary"
                                                className="p-m-1"
                                            ></Badge>
                                        )
                                    }
                                </div>
                                <form className="p-grid p-mt-3">
                                    <div className="p-col-12 p-md-6">
                                        <div className="p-fluid">
                                            <div className="p-field">
                                                <label>Entradas</label>
                                                <br />
                                                <InputText
                                                    type="number"
                                                    defaultValue={1}
                                                    min={1}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-col-12 p-md-6">
                                        <div className="p-fluid">
                                            <div className="p-field">
                                                <label>Sucursal</label>
                                                <br />
                                                <InputText
                                                    type="number"
                                                    defaultValue={1}
                                                    min={1}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="p-card-footer">
                            <div className="p-fluid">
                                <Button icon="pi pi-shopping-cart" className="p-button-rounded p-mb-2" label="Al carrito"/>
                                <Button 
                                    icon="pi pi-arrow-left"
                                    onClick={ history.goBack } className="p-button-danger p-button-rounded" label="Cancelar"/>
                            </div>
                        </div>
                    </>
                }
            </Card>
        </div>
    )
}

export default Movie
