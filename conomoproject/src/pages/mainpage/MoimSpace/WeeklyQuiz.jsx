import React from 'react';
import styled from 'styled-components';
import CustomColumn from '../../../components/container/CustomColumn';
import CustomRow from '../../../components/container/CustomRow';
import CustomFont from '../../../components/container/CustomFont';
import { useNavigate } from 'react-router-dom';

const Button = styled.button`
background-color: #535353;
padding: 0.5rem;
border: none;
border-radius: 0.5rem;
display: flex;
align-items: center;
justify-content: center;

transition: opacity 0.3s ease;

&:hover {
  opacity: 0.6;
}
`;

const QuizDiv = styled.div`
width: 100%;
min-height: 11rem;
max-height: 14rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 1rem;border: none;
border-radius: 0.5rem;
gap: 0.5rem;
background-color: #383838;
`;

const WeeklyQuiz = () => {
    const navigate = useNavigate();

    const history = () => {
        navigate('/memberhistorypage'); // 팀원별 제출기록 보기 페이지 
    }

    return (
        <CustomColumn width='100%' alignItems='center' justifyContent='flex-start' gap='1rem'>
            <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                <CustomFont color='#AFAFAF' font='1.5rem'>이번 주 출제된 문제</CustomFont>
                <Button onClick={history}>
                    <CustomFont color='white' font='white'>내 답안 제출하러 가기</CustomFont>
                </Button>
            </CustomRow>

            <QuizDiv>
                <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                    <CustomFont color='white' font='1rem'>1364번 | 설탕 나르기</CustomFont>
                    <Button>
                        <CustomFont color='white' font='0.7rem'>백준에서 확인</CustomFont>
                    </Button>
                </CustomRow>
                <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                    <CustomFont color='white' font='1rem'>1020번 | 평범한 배낭</CustomFont>
                    <Button>
                        <CustomFont color='white' font='0.7rem'>백준에서 확인</CustomFont>
                    </Button>
                </CustomRow>
                <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                    <CustomFont color='white' font='1rem'>1633번 | 하노이탑</CustomFont>
                    <Button>
                        <CustomFont color='white' font='0.7rem'>백준에서 확인</CustomFont>
                    </Button>
                </CustomRow>
            </QuizDiv>
        </CustomColumn>
    );
};

export default WeeklyQuiz;
