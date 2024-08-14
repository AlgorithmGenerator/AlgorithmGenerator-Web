import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomColumn from '../../components/container/CustomColumn';
import CustomRow from '../../components/container/CustomRow';
import CustomFont from '../../components/container/CustomFont';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 5vh;
`;

const PageContainer = styled(ContainerCenter)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 6rem;
  position: relative;
  background-color: white;
`;

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomFont color='black' font='1rem' fontWeight='bold'>여기는 메인페이지!</CustomFont>
            </PageContainer>
        </ContainerCenter>
    );
};

export default HomePage;