import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import CustomColumn from '../../components/container/CustomColumn';
import CustomRow from '../../components/container/CustomRow';
import CustomFont from '../../components/container/CustomFont';
import StyledImg from '../../components/container/StyledImg';

const RowContainer = styled(CustomRow)`
  width: 90%;
  height: 25vh;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const AnimatedColumn = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 23%;
  height: 25vh;
  gap: 1rem;
  margin-bottom: 10px;
`;

const ButtonContainer = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23%;
  height: 20vh;
  gap: 1rem;
  margin-bottom: 10px;
  border: 1px solid #626262;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const MoimList = () => {
    const navigate = useNavigate();
    const defaultImage = 'cat.png';

    // 모임 프로필, 모임 이름, 모임 경로 Mock Data 
    const [components, setComponents] = useState([
        { img: 'ex_cat1.png', text: '코노모1', path: '/conomo' },
        { img: '', text: '사과모임', path: '/applemeeting' } // 이미지가 없을 경우 기본이미지로 대체하고 경로 추가
    ]);

    const transitions = useTransition(components, {
        from: { opacity: 0, transform: 'scale(0.8)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0.8)' },
        keys: components.map((item, index) => index),
    });

    const addComponent = () => {
        setComponents([...components, { img: '', text: `새 모임 ${components.length + 1}`, path: `/new-meeting-${components.length + 1}` }]);
    };

    const handleClick = (path) => {
        navigate(path);
    };

    return (
        <RowContainer>
            {transitions((style, component, t, index) => (
                <AnimatedColumn key={index} style={style} onClick={() => handleClick(component.path)}>
                    <StyledImg
                        src={component.img ? component.img : defaultImage}
                        width='100%'
                        height='20vh'
                        borderRadius='0.5rem'
                        style={{ cursor: 'pointer' }}
                    />
                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                        <CustomFont color='black' font='1rem'>
                            {component.text}
                        </CustomFont>
                    </CustomRow>
                </AnimatedColumn>
            ))}
            <ButtonContainer onClick={addComponent}>
                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                    <CustomFont color='#626262' font='2rem' fontWeight='bold'>
                        +
                    </CustomFont>
                    <CustomFont color='#626262' font='0.8rem' fontWeight='bold'>
                        새 모임
                    </CustomFont>
                </CustomColumn>
            </ButtonContainer>
        </RowContainer>
    );
};

export default MoimList;
