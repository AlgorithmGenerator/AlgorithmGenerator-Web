import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CustomColumn from '../../../components/container/CustomColumn';
import CustomRow from '../../../components/container/CustomRow';
import CustomFont from '../../../components/container/CustomFont';
import StyledImg from '../../../components/container/StyledImg';
import { useNavigate } from 'react-router-dom';

const Button = styled.button`
background-color: #383838;
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

const MainMoimBanner = () => {

    const navigate = useNavigate();

    const manageMoim = () => {
        navigate('/managemoimpage'); // 모임관리하기 페이지
    }

    const [moimnumber, setMoimnumber] = useState(() => {
        // localStorage에서 moimnumber를 가져옴, 없으면 null
        // 각 모임 버튼 클릭 시 다른 모임으로 입장이 되는지 테스트하기 위함입니다~
        return localStorage.getItem('moimnumber') || null;
    });

    useEffect(() => {
        if (location.state && location.state.moimnumber) {
            setMoimnumber(location.state.moimnumber);
            // localStorage에 moimnumber 저장
            localStorage.setItem('moimnumber', location.state.moimnumber);
        }
    }, [location.state]);

    return (
        <CustomColumn width='90%' alignItems='flex-start' justifyContent='center' >
            <CustomRow width='100%' alignItems='center' justifyContent='flex-start' gap='1.5rem'>
                <StyledImg src='basicLogo.png' width='8rem' height='8rem' borderRadius='3px' />
                <CustomColumn width='80%' height='7rem' alignItems='flex-start' justifyContent='space-between'>
                    <CustomFont color='white' font='2rem'>여기는 모임{moimnumber}</CustomFont>
                    <Button onClick={manageMoim}>
                        <CustomFont color='white' font='0.8rem'>우리 모임 관리하기</CustomFont>
                    </Button>
                </CustomColumn>
            </CustomRow>

            <CustomColumn width='100%' alignItems='flex-end' justifyContent='center' gap='0.6rem'>
                <CustomFont color='#AFAFAF' font='1rem'>다음 제출 마감까지 남은 시간은</CustomFont>
                <CustomFont color='white' font='2rem'>3일 16시간 36분</CustomFont>
            </CustomColumn>
        </CustomColumn>
    );
};

export default MainMoimBanner;
