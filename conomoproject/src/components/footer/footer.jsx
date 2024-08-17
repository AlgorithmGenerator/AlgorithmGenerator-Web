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
  background-color: #383838;
  bottom: 0;
  left: 0;
  pointer-events: auto;
`;

const Footer = () => {
    const navigate = useNavigate();

    return (
        <NaviContainer>
            <CustomFont color='black' font='1rem' fontWeight='bold'>MADE BY HUFS GLOBAL LION CONOMO.</CustomFont>
        </NaviContainer>
    );
};

export default Footer;