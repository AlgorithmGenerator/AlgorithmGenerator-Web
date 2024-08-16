import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import CustomColumn from '../../../components/container/CustomColumn';
import CustomRow from '../../../components/container/CustomRow';

import MainMoimBanner from './MainMoimBanner';
import WeeklyQuiz from './WeeklyQuiz';
import MainMoimMembers from './MainMoimMembers';
import MainMoimHistory from './MainMoimHistory';
import MainMoimFine from './MainMoimFine';

// 각 모임 클릭 시 바로 보이는, 모임의 메인화면입니당 
// 피그마의 '화면4) 모임 입장 시 메인화면'에 해당함 

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

const PageContainer = styled(ContainerCenter)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
  position: relative;
  background-color: #2C2C2C;
  padding-bottom: 10vh;
`;


const MainMoimPage = () => {
    const location = useLocation();

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
        <ContainerCenter>
            <PageContainer>
                <MainMoimBanner />

                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='2rem'>
                    <WeeklyQuiz />

                    <CustomRow width='100%' alignItems='center' justifyContent='space-between' gap='1rem'>
                        <CustomRow width='50%'>
                            <MainMoimMembers />
                        </CustomRow>

                        <CustomRow width='50%'>
                            <MainMoimHistory />
                        </CustomRow>
                    </CustomRow>

                    <MainMoimFine />
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default MainMoimPage;
