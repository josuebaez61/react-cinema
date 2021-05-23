import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import React from 'react'
import { useDispatch } from 'react-redux'
import { hideSearchModal } from '../../store/actions/searchActions'
import './SearchModal.scss'

interface SearchModalProps {
    visible: boolean;
}

const SearchModal = ({ visible }: SearchModalProps) => {
    const dispatch = useDispatch();

    return (
        <div className="search-modal" style={{ display: visible ? 'block' : 'none' }}>
                <div className="search-modal__input-container p-d-flex p-flex-column p-jc-start p-ai-center w-100 h-100 animate__animated animate__fast animate__fadeInDown">
                    <div className="container">
                        <h2 className="p-mb-1">Buscador</h2>
                        <InputText autoFocus className="p-mb-3 w-100" placeholder="Spider-man: Homecoming" />
                        <div className="p-text-center">
                            <a className="search-modal__button-dismiss " onClick={ () => dispatch(hideSearchModal()) }>Cancelar busqueda</a>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default SearchModal
