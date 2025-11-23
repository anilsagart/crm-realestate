import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { CRM } from './pages/CRM/CRM';
import { Dashboard } from './pages/CRM/Dashboard/Dashboard';
import { Leads } from './pages/CRM/Leads/Leads';
import { Properties } from './pages/CRM/Properties/Properties';

export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/crm" element={<CRM />}>
                <Route path="" element={<Dashboard />} /> 
                <Route path="dashboard" element={<Dashboard />} /> 
                <Route path="leads" element={<Leads />} /> 
                <Route path="properties" element={<Properties />} /> 
            </Route>
        </Routes>
    );
};