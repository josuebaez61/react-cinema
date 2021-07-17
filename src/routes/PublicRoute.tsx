import React from 'react'
import { Redirect, Route, RouteChildrenProps, RouteComponentProps } from 'react-router-dom'

interface PrivateRouteProps {
    isAuthenticated: boolean;
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    render?: (props: RouteComponentProps<any>) => React.ReactNode;
    children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode;
    path?: string | string[];
    exact?: boolean;
    sensitive?: boolean;
    strict?: boolean;

}

const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}: PrivateRouteProps) => {
    return (
        <Route {...rest} render={ (props: any) => isAuthenticated ? <Redirect to="/"/> : <Component {...props} />} />
    )
}

export default PublicRoute
