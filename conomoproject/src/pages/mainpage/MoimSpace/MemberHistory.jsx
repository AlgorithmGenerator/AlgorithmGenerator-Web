import React from 'react';
import styled from 'styled-components';

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

const MemberHistoryPage = () => {
    return (
        <ContainerCenter>
            <PageContainer>
                여기는 멤버 히스토리 페이지
            </PageContainer>
        </ContainerCenter>
    );
};

export default MemberHistoryPage;
