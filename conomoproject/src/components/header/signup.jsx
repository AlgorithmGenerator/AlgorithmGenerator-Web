import React, { useState } from 'react';
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
width: 100%;
height: 3rem;
  border-radius: 0.5rem;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  cursor: pointer;
`;

const Button2 = styled.button`
  border: none;
  border-radius: 0.5rem;
  background-color: ${(props) => (props.disabled ? '#D9D9D9' : 'black')};
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const NameInput = styled.input.attrs({
    placeholder: '성함 입력',
})`
  width: 50%;
  height: 3rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
  box-sizing: border-box;

  &::placeholder {
    color: #D9D9D9;
  }
`;

const IDInput = styled.input.attrs({
    placeholder: '아이디 입력',
})`
  width: 100%;
  height: 3rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
  box-sizing: border-box;

  &::placeholder {
    color: #D9D9D9;
  }
`;

const PWInput = styled.input.attrs({
    placeholder: '비밀번호 입력',
    type: 'password',
})`
  width: 50%;
  height: 3rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
  box-sizing: border-box;

  &::placeholder {
    color: #D9D9D9;
  }
`;

const PW2Input = styled.input.attrs({
    placeholder: '비밀번호 재입력',
    type: 'password',
})`
  width: 50%;
  height: 3rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
  box-sizing: border-box;

  &::placeholder {
    color: #D9D9D9;
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
`;

const SignupPage = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pw2, setPw2] = useState('');
    const [showModal, setShowModal] = useState(false);

    const isButtonDisabled = name === '' || id === '' || pw === '' || pw2 === '';

    const goSignup = () => {
        navigate('/signuppage');
    }

    const doneLogin = () => {
        if (!isButtonDisabled) {
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false);
                navigate('/');
            }, 2000);
        }
    }

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                    <CustomRow width='50%' alignItems='center' justifyContent='flex-start'>
                        <CustomFont color='black' fontWeight='bold' font='2rem'>안녕하세요, 코딩하세요 :)</CustomFont>
                    </CustomRow>
                    <CustomRow width='50%' alignItems='center' justifyContent='flex-start'>
                        <CustomFont color='black' font='1.3rem'>코노메이커에 회원가입하세요.</CustomFont>
                    </CustomRow>
                </CustomColumn>

                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                    <NameInput value={name} onChange={(e) => setName(e.target.value)} />
                    <CustomRow width='50%' gap='1rem'>
                        <CustomRow width='70%'>
                            <IDInput value={id} onChange={(e) => setId(e.target.value)} />
                        </CustomRow>
                        <CustomRow width='30%'>
                            <Button>
                                <CustomFont color='white' font='0.8rem'>중복검사</CustomFont>
                            </Button>
                        </CustomRow>
                    </CustomRow>
                    <PWInput value={pw} onChange={(e) => setPw(e.target.value)} />
                    <PW2Input value={pw2} onChange={(e) => setPw2(e.target.value)} />
                </CustomColumn>

                <Button2 onClick={doneLogin} disabled={isButtonDisabled}>
                    <CustomFont color='white' fontWeight='bold' font='1rem'>회원가입하기</CustomFont>
                </Button2>

                {showModal && (
                    <ModalBackground>
                        <Modal>
                            <CustomFont color='black' fontWeight='bold' font='1.2rem'>회원가입되었습니다!</CustomFont>
                        </Modal>
                    </ModalBackground>
                )}
            </PageContainer>
        </ContainerCenter>
    );
};

export default SignupPage;
