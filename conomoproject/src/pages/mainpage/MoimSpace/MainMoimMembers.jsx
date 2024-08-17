import React from 'react';
import styled from 'styled-components';
import CustomColumn from '../../../components/container/CustomColumn';
import CustomRow from '../../../components/container/CustomRow';
import CustomFont from '../../../components/container/CustomFont';

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
  gap: 1rem;
  background-color: #383838;
`;

const MainMoimMembers = () => {
    const members = [
        { name: '이나영', bio: '아직 등록된 자기소개가 없어요.' },
        { name: '이수혁', bio: '귀엽고 멋있는 수혀기' },
        { name: '임숭민', bio: '라이언킹' },
        { name: '김재우', bio: '아직 등록된 자기소개가 없어요.' },
        { name: '정재웅', bio: "I'm 알고리즘 마스터" },
    ];

    return (
        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
            <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                <CustomFont color='#AFAFAF' font='1.5rem'>팀원 목록</CustomFont>
            </CustomRow>
            <QuizDiv>
                {members.map((member, index) => (
                    <CustomRow key={index} width='100%' alignItems='center' justifyContent='space-between'>
                        <CustomRow width='20%' alignItems='center' justifyContent='flex-start'>
                            <CustomFont color='white' font='1rem'>{member.name}</CustomFont>
                        </CustomRow>
                        <CustomRow width='80%' alignItems='center' justifyContent='flex-start'>
                            <CustomFont
                                color={member.bio === '아직 등록된 자기소개가 없어요.' ? '#AFAFAF' : 'white'}
                                font='1rem'
                            >
                                {member.bio}
                            </CustomFont>
                        </CustomRow>
                    </CustomRow>
                ))}
            </QuizDiv>
        </CustomColumn>
    );
};

export default MainMoimMembers;
