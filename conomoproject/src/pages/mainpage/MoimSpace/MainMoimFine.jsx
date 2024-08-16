import React from 'react';
import styled from 'styled-components';
import CustomColumn from '../../../components/container/CustomColumn';
import CustomRow from '../../../components/container/CustomRow';
import CustomFont from '../../../components/container/CustomFont';

const Button = styled.button`
  background-color: #CA6D6D;
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
  width: 90%;
  height: 10rem;
`;

const QuizDiv = styled.div`
  width: 100%;
  min-height: 11rem;
  max-height: 14rem;
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

const Divider = styled.div`
  background-color: #666666;
  width: 100%;
  height: 1px;
`;

const MainMoimFine = () => {
    const fines = [
        { name: '이나영', amount: 43000 },
        { name: '이수혁', amount: 4000 },
        { name: '임승민', amount: 26000 },
        { name: '김재우', amount: 18000 },
        { name: '정재웅', amount: 2000 },
    ];

    const totalFine = fines.reduce((acc, member) => acc + member.amount, 0);

    return (
        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
            <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                <CustomFont color='#AFAFAF' font='1.5rem'>이번 주 출제된 문제</CustomFont>
            </CustomRow>

            <QuizDiv>
                <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                    <CustomColumn width='70%' alignItems='center' justifyContent='center' gap='1rem'>

                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                            {fines.map((member, index) => (
                                <CustomRow key={index} width='100%' alignItems='center' justifyContent='space-around'>
                                    <CustomRow width='50%' alignItems='center' justifyContent='center'>
                                        <CustomFont color='#AFAFAF' font='1rem'>{member.name}</CustomFont>
                                    </CustomRow>

                                    <CustomRow width='50%' alignItems='center' justifyContent='center'>
                                        <CustomFont color='white' font='1rem' fontWeight='bold'>
                                            {member.amount.toLocaleString()}원
                                        </CustomFont>
                                    </CustomRow>
                                </CustomRow>
                            ))}
                        </CustomColumn>

                        <Divider />

                        <CustomRow width='100%' alignItems='center' justifyContent='space-around'>
                            <CustomFont color='#AFAFAF' font='1rem'>벌금 합계</CustomFont>
                            <CustomFont color='white' font='1rem' fontWeight='bold'>
                                {totalFine.toLocaleString()}원
                            </CustomFont>
                        </CustomRow>
                    </CustomColumn>

                    <CustomRow width='30%'>
                        <Button>
                            <CustomColumn width='90%' alignItems='center' justifyContent='center'>
                                <CustomFont color='white' font='1.3rem' fontWeight='bold'>벌금 사용하기</CustomFont>
                                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                                    <CustomFont color='white' font='0.8rem'>
                                        각자의 벌금만큼 모금하여 함께 사용하세요.
                                    </CustomFont>
                                    <CustomFont color='white' font='0.8rem'>
                                        모든 팀원의 벌금이 0원으로 초기화됩니다.
                                    </CustomFont>
                                </CustomColumn>
                            </CustomColumn>
                        </Button>
                    </CustomRow>
                </CustomRow>
            </QuizDiv>
        </CustomColumn>
    );
};

export default MainMoimFine;
