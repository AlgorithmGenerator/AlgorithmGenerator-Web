import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import CustomColumn from '../../../components/container/CustomColumn';
import CustomRow from '../../../components/container/CustomRow';
import CustomFont from '../../../components/container/CustomFont';
import { useNavigate } from 'react-router-dom';

// 각 모임 클릭 시 바로 보이는, 모임의 메인화면입니당 

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
  gap: 4rem;
  position: relative;
  background-color: white;
`;

const Button = styled.button`
width: 8rem;
border: none;
  border-radius: 0.5rem;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  cursor: pointer;

  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.6;
  }
`;

const AskDiv = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 0.5rem;

background-color: #D9D9D9;
border: none;
border-radius: 0.5rem;
padding: 0.5rem;

width: 100%;
`;

const BugDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 0.5rem;

background-color: #D9D9D9;
border: none;
border-radius: 0.5rem;
padding: 0.5rem;

width: 100%;
`;

const MiniDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 0.5rem;

background-color: transparent;
border: 1px solid black;
border-radius: 0.5rem;
padding: 0.5rem;

width: 100%;
min-height: 7rem;
`;

const SubmitButton = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

background-color: black;
border-radius: 0.5rem;
padding: 0.4rem;

width: 4rem;
cursor: pointer;

transition: opacity 0.3s ease;

&:hover {
  opacity: 0.6;
}
`;

const MainMoimPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const manageMoim = () => {
        navigate('/managemoimpage'); // 모임관리하기 페이지
    }

    const submit = () => {
        navigate('/submitcodepage'); // 답안 제출하기 페이지 
    }

    const history = () => {
        navigate('/memberhistorypage'); // 팀원별 제출기록 보기 페이지 
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
        <ContainerCenter>
            <PageContainer>
                <CustomFont color='black' font='1rem'>여기는 모임 메인페이지</CustomFont>
                {moimnumber && (
                    <CustomFont color='black' font='1rem'>
                        이 모임의 고유번호는 {moimnumber}입니다.
                    </CustomFont>
                )}

                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='1rem'>
                    <CustomRow width='100%' alignItems='center' justifyContent='flex-end'>
                        <Button onClick={manageMoim}>
                            <CustomFont color='white' font='1rem'>모임관리</CustomFont>
                        </Button>
                    </CustomRow>

                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start' gap='1rem'>
                        <CustomFont color='black' font='2rem' fontWeight='bold'>
                            이번주 문제
                        </CustomFont>
                        <Button onClick={submit}>
                            <CustomFont color='white' font='0.8rem'>답안 제출하기</CustomFont>
                        </Button>
                    </CustomRow>

                    <AskDiv>
                        <CustomFont color='black' font='1rem'>문제1</CustomFont>
                        <CustomFont color='black' font='1rem'>문제2</CustomFont>
                    </AskDiv>

                    <CustomRow width='100%' alignItems='center' justifyContent='space-between' gap='1rem'>
                        <MiniDiv>
                            <CustomColumn width='50%' alignItems='center' justifyContent='center' gap='0.5rem'>
                                <CustomFont color='black' font='1rem'>팀원1</CustomFont>
                                <CustomFont color='black' font='1rem'>팀원2</CustomFont>
                            </CustomColumn>

                            <CustomColumn width='50%' alignItems='center' justifyContent='center' gap='0.5rem'>
                                <CustomFont color='black' font='1rem'>소개1</CustomFont>
                                <CustomFont color='black' font='1rem'>소개2</CustomFont>
                            </CustomColumn>
                        </MiniDiv>

                        <MiniDiv>
                            <CustomColumn width='33%' alignItems='center' justifyContent='center' gap='0.5rem'>
                                <CustomFont color='black' font='1rem'>팀원1</CustomFont>
                                <CustomFont color='black' font='1rem'>팀원2</CustomFont>
                            </CustomColumn>

                            <CustomColumn width='33%' alignItems='center' justifyContent='center' gap='0.5rem'>
                                <CustomFont color='black' font='1rem'>2/5</CustomFont>
                                <CustomFont color='black' font='1rem'>0/5</CustomFont>
                            </CustomColumn>

                            <CustomColumn width='33%' alignItems='center' justifyContent='center' gap='0.5rem'>
                                <SubmitButton onClick={history}>
                                    <CustomFont color='white' font='0.8rem'>기록확인</CustomFont>
                                </SubmitButton>

                                <SubmitButton onClick={history}>
                                    <CustomFont color='white' font='0.8rem'>기록확인</CustomFont>
                                </SubmitButton>
                            </CustomColumn>
                        </MiniDiv>
                    </CustomRow>

                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start' gap='1rem'>
                        <CustomFont color='black' font='2rem' fontWeight='bold'>
                            바퀴벌레 전당
                        </CustomFont>
                    </CustomRow>

                    <BugDiv>
                        <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='0.5rem'>
                            <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                                <CustomFont color='black' font='1rem'>이나영</CustomFont>
                                <CustomFont color='black' font='1rem'>52000원</CustomFont>
                            </CustomRow>

                            <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                                <CustomFont color='black' font='1rem'>이수혁</CustomFont>
                                <CustomFont color='black' font='1rem'>36000원</CustomFont>
                            </CustomRow>
                        </CustomColumn>
                    </BugDiv>

                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default MainMoimPage;
