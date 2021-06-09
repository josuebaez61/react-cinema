import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { useDispatch } from 'react-redux'
import { hideSearchModal } from '../../store/actions/searchActions'
import './SearchModal.scss'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button'
import { useHistory } from 'react-router'
import { useForm } from '../../hooks/useForm'

interface SearchModalProps {
    visible: boolean;
}

const SearchModal = ({ visible }: SearchModalProps) => {
    const [formValue, handleChange, resetForm] = useForm({
        query: ''
    });
    const dispatch = useDispatch();
    const history  = useHistory();
    const search = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(hideSearchModal());
        history.push(`/search/?query=${ encodeURI(formValue.query) }`);
        resetForm();
    }

    return (
        <Dialog style={{ width: '90%', maxWidth: '950px' }} showHeader={false} position="top" visible={visible} onHide={ () => void(0) } >
            <h2 className="search-modal-title p-mb-1 p-text-center">Buscador</h2>
            <form id="searchForm" onSubmit={ search }>
                <InputText
                    name="query"
                    value={ formValue.query }
                    onChange={ handleChange }
                    autoFocus
                    className="p-mb-1 w-100 search-modal-input"
                    placeholder="Spider-man: Homecoming"
                />
            </form>
            <small className="p-d-block" style={{ color: '#cccc' }} >Escriba lo que esta buscando y presione <b>ENTER</b>.</small>
            <div className="p-mt-2 p-text-center">
                <Button onClick={ () => dispatch(hideSearchModal()) } className="p-button-rounded p-button-danger p-mr-2">
                    Cancelar
                </Button>
                <Button 
                    form="searchForm" 
                    type="submit" 
                    className="p-button-rounded"
                >
                    Buscar
                </Button>
            </div>
        </Dialog>
    )
}

export default SearchModal
