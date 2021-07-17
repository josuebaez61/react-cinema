import { Card } from 'primereact/card'
import { ProgressSpinner } from 'primereact/progressspinner'
import React from 'react'

const LoadingAppScreen = () => {
    return (
        <div className="auth-view">
            <div className="p-grid p-nogutter p-jc-center p-ai-center h-100">
                <div className="p-col-6">
                    <Card className="p-card-black">
                        <h1>Cargando</h1>
                        <small>Por favor, espere...</small>
                        <div className="p-d-flex p-jc-center">
                            <ProgressSpinner/>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default LoadingAppScreen
