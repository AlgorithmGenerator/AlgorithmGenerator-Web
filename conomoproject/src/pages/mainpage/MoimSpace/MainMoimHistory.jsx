import React from 'react';
import styled from 'styled-components';
import CustomColumn from '../../../components/container/CustomColumn';
import CustomRow from '../../../components/container/CustomRow';
import CustomFont from '../../../components/container/CustomFont';
import { useNavigate } from 'react-router-dom';

const QuizDiv = styled.div`
  width: 100%;
  height: 14rem;
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

const MainMoimHistory = () => {
    const members = [
        { name: '이나영', submitted: 2, total: 3 },
        { name: '이수혁', submitted: 0, total: 3 },
        { name: '임승민', submitted: 3, total: 3 },
        { name: '김재우', submitted: 0, total: 3 },
        { name: '정재웅', submitted: 0, total: 3 },
    ];

    const navigate = useNavigate();

    const history = () => {
        navigate('/memberhistorypage'); // 팀원별 제출기록 보기 페이지 
    }

    return (
        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
            <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                <CustomFont color='#AFAFAF' font='1.5rem'>팀원별 발표자료</CustomFont>
            </CustomRow>
            <QuizDiv>
                {members.map((member, index) => (
                    <CustomRow key={index} width='100%' alignItems='center' justifyContent='space-between'>
                        <CustomFont color='white' font='1rem'>{member.name}</CustomFont>
                        <CustomRow width='30%' alignItems='center' justifyContent='center' gap='0.2rem'>
                            <CustomFont color='white' font='1rem'>현재</CustomFont>
                            <CustomFont color='#93BCFF' font='1rem' fontWeight='bold'>
                                {member.submitted}/{member.total}
                            </CustomFont>
                            <CustomFont color='white' font='1rem'>제출</CustomFont>
                        </CustomRow>
                        <Button onClick={history}>
                            <CustomFont color='white' font='0.8rem'>히스토리</CustomFont>
                        </Button>
                    </CustomRow>
                ))}
            </QuizDiv>
        </CustomColumn>
    );
};

export default MainMoimHistory;
