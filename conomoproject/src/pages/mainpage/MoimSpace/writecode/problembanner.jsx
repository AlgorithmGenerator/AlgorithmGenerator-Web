import React, { useState } from 'react';
import styled from 'styled-components';
import CustomColumn from '../../../../components/container/CustomColumn';
import CustomRow from '../../../../components/container/CustomRow';
import CustomFont from '../../../../components/container/CustomFont';

// 서버로부터 받아오는 문제제목, 내용 부분 분리했습니당 

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

const Divider = styled.div`
background-color: #828282;
width: 100%;
height: 1px;
`;

const ProblemBanner = () => {

    return (
        <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='3rem'>
            <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                <CustomFont color='white' font='2rem' fontWeight='bold'>1633번 | 하노이탑</CustomFont>
                <Button onClick={() => window.location.href = 'https://www.acmicpc.net/'}>
                    <CustomFont color='#828282' font='1rem'>백준으로 보기</CustomFont>
                </Button>
            </CustomRow>

            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                    <CustomColumn alignItems='center' justifyContent='center' gap='0'>
                        <CustomFont color='#828282' fontWeight='bold' font='1.5rem'>문제</CustomFont>
                        <Divider />
                    </CustomColumn>
                </CustomRow>
                <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                    <CustomFont color='white' font='1rem'>코테 본문1</CustomFont>
                </CustomRow>
            </CustomColumn>

        </CustomColumn>
    );
};

export default ProblemBanner;
