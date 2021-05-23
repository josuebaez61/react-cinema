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
            <p className="help-text p-mb-2">Escribe tu búsqueda y luego presiona <b>ENTER</b></p>
            <div className="p-text-center">
                <Button onClick={ () => dispatch(hideSearchModal()) } className="p-button-outlined p-button-rounded">
                    Cancelar busqueda
                </Button>
            </div>
        </Dialog>
    )
}

export default SearchModal
