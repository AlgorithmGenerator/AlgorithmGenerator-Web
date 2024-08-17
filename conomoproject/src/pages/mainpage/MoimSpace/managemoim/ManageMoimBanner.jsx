import React from 'react';
import styled from 'styled-components';
import CustomColumn from '../../../../components/container/CustomColumn';
import CustomRow from '../../../../components/container/CustomRow';
import CustomFont from '../../../../components/container/CustomFont';
import StyledImg from '../../../../components/container/StyledImg';

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

const ManageMoimBanner = () => {
    return (
        <CustomRow width='100%' alignItems='flex-start' justifyContent='flex-start' gap='1rem'>
            <StyledImg src={'basicLogo.png'} width='8rem' height='8rem' borderRadius='5px' />

            <CustomColumn width='80%' height='6rem' alignItems='center' justifyContent='space-between'>
                <CustomRow width='100%' alignItems='center' justifyContent='flex-start' gap='1rem'>
                    <CustomFont color='white' font='1.5rem' fontWeight='bold'>모임이름</CustomFont>
                    <CustomFont color='white' font='1.5rem'>- 모임 관리하기</CustomFont>
                </CustomRow>
                <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                    <Button>
                        <CustomFont color='white' font='0.8rem'>초대코드 확인하기</CustomFont>
                    </Button>
                    <Button>
                        <CustomFont color='white' font='0.8rem'>초대코드 생성하기</CustomFont>
                    </Button>
                </CustomRow>
            </CustomColumn>
        </CustomRow>
    );
};

export default ManageMoimBanner;
