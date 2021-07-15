import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { Divider } from 'primereact/divider'
import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CartContext } from '../../context/CartContext'
import { fb } from '../../firebase'
import { RootState } from '../../store'
import { logout } from '../../store/actions/authActions'

const UserScreen = () => {
    const dispatch = useDispatch();
    const { displayName, email, uid } = useSelector((state: RootState) => state.auth);
    return (
        <div className="container p-pb-2 p-pt-2">
            <Card className="p-card-black" footer={() => <CartFooter dispatch={dispatch} />}>
                <h2>{displayName} <small>/ {uid}</small></h2>
                <Divider />
                <p>{email}</p>

            </Card>
        </div>
    )
}

const CartFooter = ({ dispatch }: any) => {
    const { setCart } = useContext(CartContext)

    const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
        fb.auth().signOut()
            .then(() => {
                dispatch(logout());
                setCart([]);
            })
    }

    return (
        <div className="p-d-flex p-jc-end">
            <Button onClick={handleLogout} className="p-button-danger" label="Cerrar sesión" />
        </div>
    )
}

export default UserScreen
