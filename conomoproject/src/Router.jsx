import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/mainpage/mainpage';
import LoginPage from './components/header/login';
import SignupPage from './components/header/signup';
import MyPage from './components/header/mypage';
import MainMoimPage from './pages/mainpage/MoimSpace/MainMoimPage';
import ManageMoimPage from './pages/mainpage/MoimSpace/managemoim/managemoimpage';
import MemberHistoryPage from './pages/mainpage/MoimSpace/MemberHistory';
import SubmitCodePage from './pages/mainpage/MoimSpace/SubmitCode';
import WriteCodePage from './pages/mainpage/MoimSpace/WriteCode';

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
                    <Route path='/managemoimpage' element={<ManageMoimPage />} />
                    <Route path='/memberhistorypage' element={<MemberHistoryPage />} />
                    <Route path='/submitcodepage' element={<SubmitCodePage />} />
                    <Route path='/writecodepage' element={<WriteCodePage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;