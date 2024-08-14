import React from 'react';
import styled from 'styled-components';
import CustomRow from '../../components/container/CustomRow';
import CustomFont from '../../components/container/CustomFont';
import MoimList from './MoimList';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

const PageContainer = styled(ContainerCenter)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4rem;
  position: relative;
  background-color: white;
`;

const HomePage = () => {
  return (
    <ContainerCenter>
      <PageContainer>
        <CustomRow width='90%' alignItems='center' justifyContent='flex-start'>
          <CustomFont color='black' font='2rem' fontWeight='bold'>
            오늘도 코딩한 하루 되세요 :)
          </CustomFont>
        </CustomRow>
        <MoimList />
      </PageContainer>
    </ContainerCenter>
  );
};

export default HomePage;
