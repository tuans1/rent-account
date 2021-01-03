import React from 'react';
import LoginPage from '../../components/login/login';
import ResetPassword from '../../components/login/resetPassword';
import { Switch, Route } from 'react-router-dom';

export default function LoginWrap() {
    const ROUTES = [
        {
            key: 'login',
            component: LoginPage ,
            path: '/login',
            exact: true
        },
        {
            key: 'login-reset password',
            component: ResetPassword ,
            path: '/login/reset_password',
            exact: true
        }
    ]
    return (
        <>
           <Switch>
               {ROUTES.map(x=>{
                   return <Route path={x.path} component={x.component} key={x.key} exact={x.exact} />
               })}
           </Switch>
        </>
    )
}