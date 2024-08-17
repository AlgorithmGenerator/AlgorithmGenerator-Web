import React from 'react';
import styled from 'styled-components';
import CustomRow from '../../components/container/CustomRow';
import CustomFont from '../../components/container/CustomFont';
import CustomColumn from '../../components/container/CustomColumn';
import MoimList from './MoimList';
import LeftBar from './LeftBar';

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
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
  background-color: #2C2C2C;
  gap: 2rem;
`;

const Divider = styled.div`
background-color: #666666;
width: 0.5px;
height: 100vh;
`;

const Space = styled.div`
background-color: transparent;
border: transparent;
height: 0.5rem;
`;

const HomePage = () => {
  return (
    <ContainerCenter>
      <PageContainer>
        <CustomRow width='20%' alignItems='center' justifyContent='center' gap='0'>
          <LeftBar />
          <Divider />
        </CustomRow>
        <CustomColumn width='80%' height='100vh' alignItems='center' justifyContent='flex-start'>
          <Space />
          <CustomRow width='90%' alignItems='center' justifyContent='flex-start'>
            <CustomFont color='white' font='2rem' fontWeight='bold'>
              오늘도 코딩한 하루 되세요 :)
            </CustomFont>
          </CustomRow>
          <MoimList />
        </CustomColumn>
      </PageContainer>
    </ContainerCenter>
  );
};

export default HomePage;
