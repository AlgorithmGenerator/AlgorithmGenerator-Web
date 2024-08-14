import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomColumn from '../container/CustomColumn';
import CustomRow from '../container/CustomRow';
import CustomFont from '../container/CustomFont';

const NaviContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: #D9D9D9;
  // position: fixed;
  bottom: 0;
  left: 0;
  pointer-events: auto;
`;

const Footer = () => {
    const navigate = useNavigate();

    return (
        <NaviContainer>
            <CustomFont color='black' font='1rem' fontWeight='bold'>여기는 푸터</CustomFont>
        </NaviContainer>
    );
};

export default Footer;