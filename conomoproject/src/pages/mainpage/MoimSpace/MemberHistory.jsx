import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomColumn from '../../../components/container/CustomColumn';
import CustomRow from '../../../components/container/CustomRow';
import CustomFont from '../../../components/container/CustomFont';
import StyledImg from '../../../components/container/StyledImg';

// 각 팀원의 회차별 제출기록 페이지입니다
// 피그마의 '화면5) 제출기록목록화면'에 해당함 

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
`;

const Button = styled.button`
  border: none;
  border-radius: 0.5rem;
  background-color: #AFAFAF;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  width: 50%;
`;

const QuizDiv = styled.div`
  width: 90%;
 height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  gap: 0.5rem;
  background-color: #383838;
`;

const MemberHistoryPage = () => {
  const navigate = useNavigate();

  // 회차 Mock data 
  const historyData = [
    { id: 1, round: '1회차', date: '2024.07.01', penalty: 2000, status: '열람가능', disabled: false },
    { id: 2, round: '2회차', date: '2024.07.08', penalty: 6000, status: '열람가능', disabled: false },
    { id: 3, round: '3회차', date: '2024.07.20', penalty: 8000, status: '열람가능', disabled: false },
    { id: 4, round: '4회차', date: '2024.07.29', penalty: 12000, status: '열람불가', disabled: true },
  ];

  const goDetail = (datenumber) => {
    if (!historyData.find(item => item.id === datenumber).disabled) {
      navigate('/submitcodepage', { state: { datenumber } });
    }
  }

  return (
    <ContainerCenter>
      <PageContainer>
        <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='1rem'>
          <CustomRow width='100%' alignItems='center' justifyContent='flex-start' gap='1rem'>
            <StyledImg src={'basicLogo.png'} width='8rem' height='8rem' borderRadius='5px' />

            <CustomColumn width='80%' height='6rem' alignItems='flex-start' justifyContent='space-between' gap='1rem'>
              <CustomFont color='white' font='2rem'>이나영의 히스토리</CustomFont>
              <CustomRow width='100%' alignItems='center' justifyContent='flex-start' gap='0.2rem'>
                <CustomFont color='white' font='1rem'>이번 주 문제 제출 현황:</CustomFont>
                <CustomFont color='#93BCFF' font='1rem' fontWeight='bold'>2/3</CustomFont>
              </CustomRow>
            </CustomColumn>
          </CustomRow>

          <CustomRow width='100%' alignItems='center' justifyContent='flex-end'>
            <CustomFont color='#828282' font='0.8rem'>현재 진행 중인 회차는 제출내역 열람이 불가능합니다.</CustomFont>
          </CustomRow>
        </CustomColumn>

        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
          <CustomRow width='90%' alignItems='center' justifyContent='center' gap='4.5rem'>
            <CustomRow width='20%' alignItems='center' justifyContent='center' gap='1rem'>
              <CustomFont color='white' font='1.2rem' fontWeight='bold'>회차</CustomFont>
            </CustomRow>

            <CustomRow width='20%' alignItems='center' justifyContent='center' gap='1rem'>
              <CustomFont color='white' font='1.2rem' fontWeight='bold'>마감일</CustomFont>
            </CustomRow>

            <CustomRow width='20%' alignItems='center' justifyContent='center' gap='1rem'>
              <CustomFont color='white' font='1.2rem' fontWeight='bold'>누적벌금</CustomFont>
            </CustomRow>

            <CustomRow width='20%' alignItems='center' justifyContent='center' gap='1rem'>
              <CustomFont color='white' font='1.2rem' fontWeight='bold'>제출내역</CustomFont>
            </CustomRow>
          </CustomRow>

          {historyData.map((item) => (
            <QuizDiv key={item.id}>
              <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                <CustomRow width='25%' alignItems='center' justifyContent='center'>
                  <CustomFont color='white' font='0.8rem'>{item.round}</CustomFont>
                </CustomRow>
                <CustomRow width='25%' alignItems='center' justifyContent='center'>
                  <CustomFont color='white' font='0.8rem'>{item.date}</CustomFont>
                </CustomRow>
                <CustomRow width='25%' alignItems='center' justifyContent='center'>
                  <CustomFont color='white' font='0.8rem'>{item.penalty.toLocaleString()}원</CustomFont>
                </CustomRow>
                <CustomRow width='25%' alignItems='center' justifyContent='center'>
                  <Button disabled={item.disabled} onClick={() => goDetail(item.id)}>
                    <CustomFont color={item.disabled ? 'red' : 'white'} font='0.8rem' fontWeight='bold'>
                      {item.status}
                    </CustomFont>
                  </Button>
                </CustomRow>
              </CustomRow>
            </QuizDiv>
          ))}
        </CustomColumn>
      </PageContainer>
    </ContainerCenter>
  );
};

export default MemberHistoryPage;
