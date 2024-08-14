import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomRow from '../container/CustomRow';
import CustomColumn from '../container/CustomColumn';
import CustomFont from '../container/CustomFont';

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
border: 1px solid #626262;
border-radius: 0.5rem;
background-color: transparent;

display: flex;
align-items: center;
justify-content: center;
padding: 0.5rem;
cursor: pointer;
`;

const SignupPage = () => {
    const navigate = useNavigate();

    const doneSignup = () => {
        navigate('/');
    }

    return (
        <ContainerCenter>
            <PageContainer>
                여기는 회원가입 화면

                <Button onClick={doneSignup}>회원가입 완료</Button>
            </PageContainer>
        </ContainerCenter>
    );
};

export default SignupPage;
