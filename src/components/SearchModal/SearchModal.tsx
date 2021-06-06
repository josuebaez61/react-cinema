import React from 'react'
import { InputText } from 'primereact/inputtext'
import { useDispatch } from 'react-redux'
import { hideSearchModal } from '../../store/actions/searchActions'
import './SearchModal.scss'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button'
interface SearchModalProps {
    visible: boolean;
}

const SearchModal = ({ visible }: SearchModalProps) => {
    const dispatch = useDispatch();

    return (
        <Dialog style={{ width: '90%', maxWidth: '950px' }} showHeader={false} position="top" visible={visible} onHide={ () => void(0) } >
            <h2 className="search-modal-title p-mb-1 p-text-center">Buscador</h2>
            <InputText autoFocus className="p-mb-1 w-100 search-modal-input" placeholder="Spider-man: Homecoming" />
            <small className="p-d-block" style={{ color: '#cccc' }} >Escriba lo que esta buscando y presione <b>ENTER</b>.</small>
            <div className="p-mt-2 p-text-center">
                <Button onClick={ () => dispatch(hideSearchModal()) } className="p-button-rounded p-button-danger p-mr-2">
                    Cancelar
                </Button>
                <Button onClick={ () => dispatch(hideSearchModal()) } className="p-button-rounded">
                    Buscar
                </Button>
            </div>
        </Dialog>
    )
}

export default SearchModal
