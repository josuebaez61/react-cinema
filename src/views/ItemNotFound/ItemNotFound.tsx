import { faFrown, faSadCry } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import React from 'react'
import { useHistory } from 'react-router-dom'

const ItemNotFound = () => {
    const history = useHistory();
    return (
        <div className="container p-pb-2 p-pt-2">
            <Card className="p-card-black p-text-center">
                <FontAwesomeIcon size="3x" icon={ faFrown }></FontAwesomeIcon>
                <h2 className="p-pb-3">El producto ya no está disponible.</h2>
                <Button 
                    onClick={ () => history.push('/cartelera') }
                    label="Volver al inicio"
                />
            </Card>
        </div>
    )
}

export default ItemNotFound
