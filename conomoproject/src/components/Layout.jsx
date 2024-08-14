import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from './header/header';
import Footer from './footer/footer';
import { Outlet } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 10vh;
  padding-bottom: 10vh;
`;

const Main = styled.main`
  flex: 1;
  overflow-y: auto;
`;

const Layout = () => {

    return (
        <Container>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </Container>
    );
};

export default Layout;