import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomColumn from '../../../components/container/CustomColumn';
import CustomRow from '../../../components/container/CustomRow';
import CustomFont from '../../../components/container/CustomFont';

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

const Button = styled.button`
  border: none;
  border-radius: 0.5rem;
  background-color: ${(props) => (props.disabled ? '#D9D9D9' : 'white')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  width: 50%;
`;

const HistoryDiv = styled.div`
background-color: black;
border: none;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
width: 100%;
min-height: 30vh;
padding: 0.5rem;
`;

const Divider = styled.div`
background-color: white;
height: 1px;
width: 100%;
`;

const MemberHistoryPage = () => {
  const navigate = useNavigate();

  // 회차 Mock data 
  const historyData = [
    { id: 1, round: '1회차', date: '2024.06.28', penalty: 2000, status: '열람가능', datenumber: 2 },
    { id: 2, round: '2회차', date: '2024.07.05', penalty: 6000, status: '열람가능', datenumber: 1 },
    { id: 3, round: '3회차', date: '2024.07.10', penalty: 8000, status: '열람불가(마감일 전)', datenumber: 3 },
  ];

  const goDetail = (datenumber) => {
    navigate('/historydetailpage', { state: { datenumber } });
  }

  return (
    <ContainerCenter>
      <PageContainer>
        <CustomRow width='90%' alignItems='center' justifyContent='flex-start'>
          <CustomFont color='black' font='2rem'>히스토리</CustomFont>
        </CustomRow>

        <HistoryDiv>
          <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='2rem'>
            <CustomRow width='100%' alignItems='center' justifyContent='space-around'>
              <CustomRow width='25%' alignItems='center' justifyContent='center' gap='1rem'>
                <CustomFont color='white' font='1.2rem' fontWeight='bold'>회차</CustomFont>
              </CustomRow>

              <CustomRow width='25%' alignItems='center' justifyContent='center' gap='1rem'>
                <CustomFont color='white' font='1.2rem' fontWeight='bold'>마감일</CustomFont>
              </CustomRow>

              <CustomRow width='25%' alignItems='center' justifyContent='center' gap='1rem'>
                <CustomFont color='white' font='1.2rem' fontWeight='bold'>누적벌금</CustomFont>
              </CustomRow>

              <CustomRow width='25%' alignItems='center' justifyContent='center' gap='1rem'>
                <CustomFont color='white' font='1.2rem' fontWeight='bold'>제출내역</CustomFont>
              </CustomRow>
            </CustomRow>

            <Divider />

            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
              {historyData.map((history) => (
                <CustomRow key={history.id} width='100%' alignItems='center' justifyContent='space-around'>
                  <CustomRow width='25%' alignItems='center' justifyContent='center' gap='1rem'>
                    <CustomFont color='white' font='1rem'>{history.round}</CustomFont>
                  </CustomRow>

                  <CustomRow width='25%' alignItems='center' justifyContent='center' gap='1rem'>
                    <CustomFont color='white' font='1rem'>{history.date}</CustomFont>
                  </CustomRow>

                  <CustomRow width='25%' alignItems='center' justifyContent='center' gap='1rem'>
                    <CustomFont color='white' font='1rem'>{history.penalty}</CustomFont>
                  </CustomRow>

                  <CustomRow width='25%' alignItems='center' justifyContent='center' gap='1rem'>
                    <Button
                      onClick={() => history.status === '열람가능' && goDetail(history.datenumber)}
                      disabled={history.status !== '열람가능'}
                    >
                      <CustomFont color={history.status === '열람가능' ? 'black' : 'red'} font='0.8rem' fontWeight='bold'>
                        {history.status}
                      </CustomFont>
                    </Button>
                  </CustomRow>
                </CustomRow>
              ))}
            </CustomColumn>
          </CustomColumn>
        </HistoryDiv>
      </PageContainer>
    </ContainerCenter>
  );
};

export default MemberHistoryPage;
