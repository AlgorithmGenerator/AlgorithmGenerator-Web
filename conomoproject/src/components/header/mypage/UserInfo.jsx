import React from 'react';
import styled from 'styled-components';
import CustomColumn from '../../container/CustomColumn';
import CustomRow from '../../container/CustomRow';
import CustomFont from '../../container/CustomFont';
import StyledImg from '../../container/StyledImg';

const Divider = styled.div`
background-color: #666666;
width: 2px;
height: 2rem;
`;

const Button = styled.button`
padding: 0.8rem;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
border: none;
background-color: #383838;

transition: opacity 0.3s ease;

&:hover {
  opacity: 0.6;
}
`;

const UserInfo = () => {
    return (
        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='2rem'>
            <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                <StyledImg src={'basicLogo.png'} width='8rem' height='8rem' borderRadius='5px' />
            </CustomRow>
            <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                <CustomFont color='white' font='2rem'>lny021102</CustomFont>
            </CustomRow>
            <CustomRow width='100%' alignItems='center' justifyContent='flex-start' gap='1rem'>
                <Divider />
                <CustomFont color='white' font='1rem'>한줄소개한줄소개</CustomFont>
            </CustomRow>

            <CustomRow width='100%' alignItems='center' justifyContent='flex-start' gap='1rem'>
                <Button>
                    <CustomFont color='white' font='0.8rem'>비밀번호 변경</CustomFont>
                </Button>
                <Button>
                    <CustomFont color='white' font='0.8rem'>한줄소개 추가/수정</CustomFont>
                </Button>
            </CustomRow>
            <CustomColumn width='100%' alignItems='flex-end' justifyContent='center' gap='1rem'>
                <CustomFont color='#949494' font='1.8rem' fontWeight='bold'>올해 열정 톺아보기</CustomFont>
                <CustomFont color='#949494' font='0.8rem'>날마다 코드를 수정/제출하신 횟수가 반영됩니다.</CustomFont>
            </CustomColumn>
        </CustomColumn>
    );
};

export default UserInfo;
