import React, { useState } from 'react';
import styled from 'styled-components';
import CustomColumn from '../../../../components/container/CustomColumn';
import CustomRow from '../../../../components/container/CustomRow';
import CustomFont from '../../../../components/container/CustomFont';
import StyledImg from '../../../../components/container/StyledImg';

const QuizDiv = styled.div`
  width: 20%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  gap: 0.5rem;
  background-color: #383838;
`;

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

const ManageOnOff = () => {
    const [toggleActive, setToggleActive] = useState(true);

    const handleToggleClick = () => {
        setToggleActive(!toggleActive);
    };

    return (
        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
            <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                <CustomFont color='#828282' font='1.5rem' fontWeight='bold'>모임 활동상태 변경</CustomFont>
            </CustomRow>
            <CustomRow width='100%' alignItems='flex-end' justifyContent='space-between'>
                <QuizDiv>
                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                        <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
                            <CustomFont color='#828282' font='1rem'>현재 모임 상태는</CustomFont>
                            <CustomFont color='#93BCFF' font='1rem'> {toggleActive ? 'ON' : 'OFF'}</CustomFont>
                        </CustomRow>

                        <ToggleButtonContainer onClick={handleToggleClick}>
                            <ToggleButtonCircle isActive={toggleActive} />
                        </ToggleButtonContainer>
                    </CustomColumn>
                </QuizDiv>

                <CustomColumn alignItems='flex-end' justifyContent='center' gap='0.5rem'>
                    <CustomFont color='#828282' font='0.9rem'>시험기간, 휴식기간 등 모임 활동을 잠깐 멈출 수 있어요.</CustomFont>
                    <CustomFont color='#828282' font='0.9rem'>OFF로 전환 시, 제출 마감 카운트다운이 중지됩니다.</CustomFont>
                    <CustomFont color='#828282' font='0.9rem'>ON으로 전환하시면, 제출 마감 주기가 처음부터 다시 시작됩니다.</CustomFont>
                    <CustomFont color='#828282' font='0.9rem'>현재 출제된 문제와 제출된 코드 내역은 유지됩니다.</CustomFont>
                </CustomColumn>
            </CustomRow>
        </CustomColumn>
    );
};

export default ManageOnOff;
