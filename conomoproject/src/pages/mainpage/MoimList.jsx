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

const ButtonContainer2 = styled(animated.div)`
  width: 50%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 10px;
  border: 1px solid #626262;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: border 0.3s ease, background-color 0.3s ease;

  &:hover {
    border: 1px solid #7A7A7A;
    background-color: #7A7A7A;
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  box-sizing: border-box;
`;

const ConfirmButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  background-color: ${(props) => (props.disabled ? '#D9D9D9' : 'black')};
  color: white;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const CancelButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #D9D9D9;
  color: black;
  cursor: pointer;
`;

const HoverableImg = styled(StyledImg)`
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.6;
  }
`;

const MoimList = () => {
    const navigate = useNavigate();
    const defaultImage = 'cat.png';

    const [components, setComponents] = useState([
        { img: 'ex_cat1.png', text: '코노모1', moimnumber: 1 },
        { img: '', text: '사과모임', moimnumber: 2 }
    ]);

    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [inputValue, setInputValue] = useState('');

    const transitions = useTransition(components, {
        from: { opacity: 0, transform: 'scale(0.8)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0.8)' },
        keys: components.map((item, index) => index),
    });

    const addComponent = (newComponent) => {
        setComponents([...components, newComponent]);
    };

    const handleClick = (moimnumber) => {
        console.log(moimnumber);  // 콘솔에 moimnumber 출력
        navigate(`/mainmoimpage`, { state: { moimnumber } });
    };

    const handleAddClick = () => {
        setShowModal(true);
        setModalContent('options');
        setInputValue('');
    };

    const handleOptionSelect = (option) => {
        if (option === 'join') {
            setModalContent('join');
        } else if (option === 'create') {
            setModalContent('create');
        }
    };

    const handleConfirm = () => {
        setShowModal(false);
        const newComponent = {
            img: '',
            text: modalContent === 'join' ? `참여한 모임 ${components.length + 1}` : inputValue,
            moimnumber: components.length + 1
        };
        setTimeout(() => addComponent(newComponent), 200);
    };

    const handleCancel = () => {
        setShowModal(false);
    };

    return (
        <RowContainer>
            {transitions((style, component, t, index) => (
                <AnimatedColumn key={index} style={style} onClick={() => handleClick(component.moimnumber)}>
                    <HoverableImg
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
            <ButtonContainer onClick={handleAddClick}>
                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                    <CustomFont color='#626262' font='2rem' fontWeight='bold'>
                        +
                    </CustomFont>
                    <CustomFont color='#626262' font='0.8rem' fontWeight='bold'>
                        새 모임
                    </CustomFont>
                </CustomColumn>
            </ButtonContainer>

            {showModal && (
                <ModalBackground>
                    <Modal>
                        {modalContent === 'options' && (
                            <>
                                <CustomFont color='black' fontWeight='bold' font='1.2rem'>
                                    원하시는 옵션을 선택해주세요.
                                </CustomFont>
                                <CustomRow width='100%' gap='1rem'>
                                    <ButtonContainer2 onClick={() => handleOptionSelect('join')}>
                                        <CustomFont color='black' fontWeight='bold'>
                                            팀 입장하기
                                        </CustomFont>
                                    </ButtonContainer2>
                                    <ButtonContainer2 onClick={() => handleOptionSelect('create')}>
                                        <CustomFont color='black' fontWeight='bold'>
                                            팀 생성하기
                                        </CustomFont>
                                    </ButtonContainer2>
                                </CustomRow>
                                <CancelButton onClick={handleCancel}>
                                    취소
                                </CancelButton>
                            </>
                        )}
                        {modalContent === 'join' && (
                            <>
                                <CustomFont color='black' fontWeight='bold' font='1.2rem'>
                                    전송받으신 초대 코드를 입력해주세요.
                                </CustomFont>
                                <Input
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="초대 코드 입력"
                                />
                                <CustomRow width='100%' gap='0.5rem'>
                                    <ConfirmButton onClick={handleConfirm} disabled={!inputValue}>
                                        확인
                                    </ConfirmButton>
                                    <CancelButton onClick={handleCancel}>
                                        취소
                                    </CancelButton>
                                </CustomRow>
                            </>
                        )}
                        {modalContent === 'create' && (
                            <>
                                <CustomFont color='black' fontWeight='bold' font='1.2rem'>
                                    모임의 이름을 입력해주세요.
                                </CustomFont>
                                <Input
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="모임 이름 입력"
                                />
                                <CustomRow width='100%' gap='0.5rem'>
                                    <ConfirmButton onClick={handleConfirm} disabled={!inputValue}>
                                        확인
                                    </ConfirmButton>
                                    <CancelButton onClick={handleCancel}>
                                        취소
                                    </CancelButton>
                                </CustomRow>
                            </>
                        )}
                    </Modal>
                </ModalBackground>
            )}
        </RowContainer>
    );
};

export default MoimList;
