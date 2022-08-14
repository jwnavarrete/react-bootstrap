import React, { lazy } from 'react';
import MainLayout from '@layout/MainLayout';
import Loadable from '@components/Loadable';

const DashboardDefault = Loadable(lazy(() => import('@views/dashboard/Default')));
const SamplePage = Loadable(lazy(() => import('@views/pages/SamplePage')));


const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/sample-page',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
