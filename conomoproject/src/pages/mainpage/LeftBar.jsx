import React from 'react';
import styled from 'styled-components';
import CustomColumn from '../../components/container/CustomColumn';
import CustomRow from '../../components/container/CustomRow';
import CustomFont from '../../components/container/CustomFont';
import StyledImg from '../../components/container/StyledImg';
import { useNavigate } from 'react-router-dom';

const Divider = styled.div`
background-color: #666666;
width: 100%;
height: 1px;
`;

const Button = styled.button`
width: 80%;
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

const Space = styled.div`
background-color: transparent;
border: transparent;
height: 2rem;
`;

const LeftBar = () => {
    const navigate = useNavigate();

    const goMy = () => {
        navigate('/mypage'); // 내 정보 관리 
    }

    const goAsk = () => {
        navigate('/askpage'); //문의사항
    }

    return (
        <CustomColumn width='100%' height='100vh' alignItems='center' justifyContent='flex-start' gap='1rem' >
            <Space />
            <CustomRow width='80%' alignItems='center' justifyContent='flex-start' gap='0.5rem'>
                <StyledImg src={'basicLogo.png'} width='2rem' height='2rem' borderRadius='5px' />
                <CustomFont color='white' font='1rem'>lny021102</CustomFont>
            </CustomRow>

            <Divider />

            <Button onClick={goMy}>
                <CustomFont color='white' font='1rem'>내 정보 관리</CustomFont>
            </Button>

            <Button onClick={goAsk}>
                <CustomFont color='white' font='1rem'>문의사항</CustomFont>
            </Button>
        </CustomColumn>
    );
};

export default LeftBar;
