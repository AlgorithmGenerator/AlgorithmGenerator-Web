import React from 'react';
import styled from 'styled-components';
import CustomColumn from '../../container/CustomColumn';
import CustomRow from '../../container/CustomRow';
import CustomFont from '../../container/CustomFont';
import StyledImg from '../../container/StyledImg';

const Divider = styled.div`
background-color: #666666;
width: 100%;
height: 1px;
margin-bottom: 1rem;
`;

const FineDiv = styled.div`
width: 100%;
background-color: none;
border: 1px solid #666666;
display: flex;
flex-direction: column;
align-items: space-between;
justify-content: center;

`;

const AllFineDiv = styled.div`
width: 100%;
height: 3rem;
display: flex;
align-items: center;
justify-content: center;
background-color: #666666;
border: none;
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

const UserFine = () => {
    return (
        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
            <FineDiv>
                <CustomRow width='100%' height='2rem' alignItems='center' justifyContent='flex-start'>
                    <CustomRow width='35%' alignItems='center' justifyContent='center'>
                        <CustomFont>모임별 나의 현재 벌금</CustomFont>
                    </CustomRow>
                </CustomRow>
                <Divider />
                <CustomColumn width='100%' height='25rem' alignItems='center' justifyContent='flex-start' gap='0.7rem'>
                    <CustomRow width='90%' alignItems='center' justifyContent='space-between'>
                        <CustomFont color='white' font='1rem'>코노모짭1</CustomFont>
                        <CustomFont color='white' font='1rem'>20,000원</CustomFont>
                    </CustomRow>
                    <CustomRow width='90%' alignItems='center' justifyContent='space-between'>
                        <CustomFont color='white' font='1rem'>코노모짭2</CustomFont>
                        <CustomFont color='white' font='1rem'>12,000원</CustomFont>
                    </CustomRow>
                    <CustomRow width='90%' alignItems='center' justifyContent='space-between'>
                        <CustomFont color='white' font='1rem'>코노모짭3</CustomFont>
                        <CustomFont color='white' font='1rem'>30,000원</CustomFont>
                    </CustomRow>
                    <CustomRow width='90%' alignItems='center' justifyContent='space-between'>
                        <CustomFont color='white' font='1rem'>코노모짭4</CustomFont>
                        <CustomFont color='white' font='1rem'>30,000원</CustomFont>
                    </CustomRow>
                </CustomColumn>
                <AllFineDiv>
                    <CustomRow width='90%' alignItems='center' justifyContent='space-around'>
                        <CustomFont color='white' font='1rem'>쌓인 벌금</CustomFont>
                        <CustomFont color='white' font='1.5rem' fontWeight='bold'>82,000원</CustomFont>
                    </CustomRow>
                </AllFineDiv>
            </FineDiv>
            <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                <Button>
                    <CustomFont color='white' font='0.7rem'>누적 벌금 확인하기</CustomFont>
                </Button>
            </CustomRow>
        </CustomColumn>
    );
};

export default UserFine;
