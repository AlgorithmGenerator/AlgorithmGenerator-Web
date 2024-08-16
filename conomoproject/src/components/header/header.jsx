import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomRow from '../container/CustomRow';
import CustomColumn from '../container/CustomColumn';
import CustomFont from '../container/CustomFont';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 6vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #2C2C2C;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

const Button = styled.button`
border: 1px solid #626262;
border-radius: 0.5rem;
background-color: transparent;

width: 4rem;
display: flex;
align-items: center;
justify-content: center;
padding: 0.5rem;
cursor: pointer;
`;

export default function Header() {
    const navigate = useNavigate();

    const GoMy = () => {
        navigate('/mypage');
    }

    // 원래는 브라우저 로그인 기록 검사해서, 내역 있으면 바로 메인/없으면 로그인(회원가입) 화면 라우팅인데,
    // 개발 단계에서는 빠른 UI 제작을 위해 일단 로그인/회원가입 화면으로 이동하는 버튼을 달아뒀어요.
    // 나중에 기획대로 로직 변경하고, 지금은 간퍈하게 버튼 타고 들어가서 UI 만듭시당 ~

    const GoLogin = () => {
        navigate('/loginpage');
    }

    return (
        <HeaderContainer>
            <CustomRow width='100%' justifyContent='space-between'>
                <CustomRow width='100%' justifyContent='flex-end' gap='1rem'>
                    <Button onClick={GoLogin}>
                        <CustomFont color='#626262' font='1rem'>LOGIN</CustomFont>
                    </Button>
                    <Button onClick={GoMy}>
                        <CustomFont color='#626262' font='1rem'>MY</CustomFont>
                    </Button>
                </CustomRow>
            </CustomRow>
        </HeaderContainer>
    );
}