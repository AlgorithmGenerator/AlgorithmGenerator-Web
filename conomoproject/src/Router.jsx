import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/mainpage/mainpage';
import LoginPage from './components/header/login';
import SignupPage from './components/header/signup';
import MyPage from './components/header/mypage';
import MainMoimPage from './pages/mainpage/MoimSpace/MainMoimPage';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path='/loginpage' element={<LoginPage />} />
                    <Route path='/signuppage' element={<SignupPage />} />
                    <Route path='/mypage' element={<MyPage />} />
                    <Route path='/mainmoimpage' element={<MainMoimPage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;