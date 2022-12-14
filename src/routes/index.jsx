import React from 'react';
import { useRoutes } from 'react-router-dom';
// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
// ==============================|| ROUTING RENDER ||============================== //
export default function ThemeRoutes() {
    // AuthenticationRoutes
    return useRoutes([MainRoutes, AuthenticationRoutes]);
}