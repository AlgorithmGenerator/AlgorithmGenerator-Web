import React from 'react';
import styled from 'styled-components';
import CustomColumn from '../../container/CustomColumn';
import CustomRow from '../../container/CustomRow';
import CustomFont from '../../container/CustomFont';
import StyledImg from '../../container/StyledImg';

import UserInfo from './UserInfo';
import UserGreen from './UserGreen';
import UserFine from './UserFine';

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
  background-color: #2C2C2C;
  padding-bottom: 5vh;
`;

const MyPage = () => {
  return (
    <ContainerCenter>
      <PageContainer>
        <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='3rem'>
          <UserInfo />
          <CustomRow width='100%' alignItems='flex-start' justifyContent='center'>
            <CustomRow width='30%' alignItems='flex-start'>
              <UserFine />
            </CustomRow>
            <CustomRow width='80%' alignItems='flex-start'>
              <UserGreen />
            </CustomRow>
          </CustomRow>
        </CustomColumn>
      </PageContainer>
    </ContainerCenter>
  );
};

export default MyPage;
