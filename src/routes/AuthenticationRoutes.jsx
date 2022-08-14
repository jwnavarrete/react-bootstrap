import React, { lazy } from 'react';
// project imports
import MinimalLayout from '@layout/MinimalLayout';
import Loadable from '@components/Loadable';
// login option 3 routing
const AuthLogin = Loadable(lazy(() => import('@views/pages/Auth/Login')));
const AuthRegister = Loadable(lazy(() => import('@views/pages/Auth/Register')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/pages/auth/login',
            element: <AuthLogin />
        },
        {
            path: '/pages/auth/register',
            element: <AuthRegister />
        }
    ]
};

export default AuthenticationRoutes;
