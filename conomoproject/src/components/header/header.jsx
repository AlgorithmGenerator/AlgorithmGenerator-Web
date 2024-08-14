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
  min-height: 4vh;
  z-index: 99;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export default function Header() {
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <CustomRow width='97%' justifyContent='space-between'>
                <CustomRow width='100%' justifyContent='flex-end'>
                    <CustomFont color='black' fontWeight='bold' font='1rem'>여기는 헤더</CustomFont>
                </CustomRow>
            </CustomRow>
        </HeaderContainer>
    );
}