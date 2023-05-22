import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes } from '../routes';
import { BASE_ROUTE } from '../utils/consts';

function AppRouter() {
    return (
        <Routes>
            {publicRoutes().map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path='*' element={<Navigate to={BASE_ROUTE}/>} />
        </Routes>
    );
};

export default AppRouter;
