import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/mainpage/mainpage';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;