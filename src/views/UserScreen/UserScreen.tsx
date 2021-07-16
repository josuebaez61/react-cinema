import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CartContext } from '../../context/CartContext'
import { fb } from '../../firebase'
import { RootState } from '../../store'
import { logout } from '../../store/actions/authActions'

const UserScreen = () => {
    const dispatch = useDispatch();
    const { email } = useSelector((state: RootState) => state.auth);
    return (
        <div className="container p-pb-2 p-pt-2">
            <div className="p-grid p-jc-center">
                <div className="p-col-12 p-md-6">
                    <Card className="p-card-black" footer={() => <CartFooter dispatch={dispatch} />}>
                        <h2 className="p-text-center">{email}</h2>
                    </Card>
                </div>
            </div>
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
        <div className="p-d-flex p-jc-center">
            <Button onClick={handleLogout} className="p-button-danger" label="Cerrar sesión" />
        </div>
    )
}

export default UserScreen
