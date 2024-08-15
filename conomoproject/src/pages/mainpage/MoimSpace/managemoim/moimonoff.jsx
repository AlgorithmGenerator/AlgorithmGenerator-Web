import React, { useState } from 'react';
import styled from 'styled-components';
import CustomColumn from '../../../../components/container/CustomColumn';
import CustomRow from '../../../../components/container/CustomRow';
import CustomFont from '../../../../components/container/CustomFont';
import StyledImg from '../../../../components/container/StyledImg';

const ToggleButtonContainer = styled.div`
  width: 100px;
  height: 50px;
  border: 2px solid gray;
  border-radius: 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

const ToggleButtonCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  transition: all 0.3s ease;
  left: ${(props) => (props.isActive ? '55px' : '5px')};
`;

const Grid = styled.div`
border: 1px solid black;
border-radius: 0.5rem;
padding: 0.2rem;
background-color: transparent;
width: 100%;
min-height: 20vh;
max-height: 40vh;
display: flex;
align-items: center;
justify-content: center;
`;

const MoimOnOff = () => {
    const [toggleActive, setToggleActive] = useState(true);

    const handleToggleClick = () => {
        setToggleActive(!toggleActive);
    };

    return (

        <Grid>
            <CustomColumn width='90%' height='15vh' alignItems='center' justifyContent='space-between' gap='1rem'>
                <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.2rem'>
                    <CustomFont color='black' font='1.2rem' fontWeight='bold'>모임 활동 상태 변경</CustomFont>
                    <CustomFont color='black' font='0.8rem'>시험기간, 휴식기간에는 출제/제출을 잠깐 멈춥니다.</CustomFont>
                </CustomColumn>

                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                    <CustomFont color='black' font='0.9rem' fontWeight='bold'>현재 상태는 {toggleActive ? 'ON' : 'OFF'}</CustomFont>
                    <ToggleButtonContainer onClick={handleToggleClick}>
                        <ToggleButtonCircle isActive={toggleActive} />
                    </ToggleButtonContainer>
                </CustomColumn>

            </CustomColumn>
        </Grid>
    );
};

export default MoimOnOff;
