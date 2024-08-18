import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomRow from '../container/CustomRow';
import CustomColumn from '../container/CustomColumn';
import CustomFont from '../container/CustomFont';

const SignupPage = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pw2, setPw2] = useState('');
    const [showModal, setShowModal] = useState(false);

    const [isPwValid, setIsPwValid] = useState(true);
    const [isPwMatch, setIsPwMatch] = useState(true);

    const isValidPassword = (password) => {
        const lengthValid = password.length >= 6 && password.length < 11;
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        return lengthValid && hasSpecialChar && hasNumber;
    };

    const handlePwChange = (e) => {
        const value = e.target.value;
        setPw(value);
        setIsPwValid(isValidPassword(value));
    };

    const handlePw2Change = (e) => {
        const value = e.target.value;
        setPw2(value);
        setIsPwMatch(value === pw);
    };

    const isButtonDisabled = name === '' || id === '' || pw === '' || pw2 === '' || !isPwValid || !isPwMatch;

    const doneLogin = () => {
        if (!isButtonDisabled) {
            setShowModal(true);
            /*setTimeout(() => {
                setShowModal(false);
                navigate('/loginpage');
            }, 2000);*/
        }
    }

    return (
        <ContainerCenter>
            <ImageBox>
                <Image img src="/LogoHD.svg" alt="고양이 이미지" />
            </ImageBox>

            <SignUpSmallBoxContainer>
                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem' border-radius="0.3125rem" border="1px #838383" background-color="#2C2C2C">
                    <CustomRow width='50%' alignItems='center' justifyContent='center'>
                        <CustomFont color='white' fontWeight='bold' font='3rem'>회원가입</CustomFont>
                    </CustomRow>
                </CustomColumn>

                <Line />

                <CustomColumn width='70%' alignItems='center' justifyContent='center' gap='1rem'>
                    <NameInput value={name} onChange={(e) => setName(e.target.value)} />

                    <IDInput value={id} onChange={(e) => setId(e.target.value)} />

                    <ButtonRightContainerDuplication>
                        <DuplicationCheck>중복검사</DuplicationCheck>
                    </ButtonRightContainerDuplication>

                    <PWInput value={pw} onChange={handlePwChange} />
                    {!isPwValid && <ErrorMessage>비밀번호는 6글자 이상 11글자 미만,<br /> 특수문자 1개 이상, 숫자 1개 이상을 포함해야 합니다.</ErrorMessage>}

                    <PW2Input value={pw2} onChange={handlePw2Change} />
                    {!isPwMatch && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}

                    <ButtonRightContainerSignUp>
                        <Button2 onClick={doneLogin} disabled={isButtonDisabled}>
                            <SignUpFont>회원가입</SignUpFont>
                        </Button2>
                    </ButtonRightContainerSignUp>
                </CustomColumn>

                {showModal && (
                    <ModalBackground>
                        <Modal>
                            <CustomFont color='black' fontWeight='400' font='2.25rem' font-family='Inter'>회원가입이 완료되었습니다.</CustomFont>
                            <ModalButton onClick={() => navigate('/loginpage')}>확인</ModalButton>
                        </Modal>
                    </ModalBackground>
                )}
            </SignUpSmallBoxContainer>
        </ContainerCenter>
    );
};

export default SignupPage;

const ContainerCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-color: black;
    z-index: 1;
    position: relative;
`;

const SignUpSmallBoxContainer = styled.div`
    width: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    border-radius: 0.3125rem;
    border: 1px solid #838383;
    background: #2C2C2C;
    height: 65vh;
    z-index: 1;
    position: absolute;
`;

const DuplicationCheck = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7.625rem;
    height: 2.25rem;
    flex-shrink: 0;
    border-radius: 0.3125rem;
    background: #383838;
    color: #C7C7C7;
    text-align: center;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
`;

const ButtonRightContainerDuplication = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
`;

const ButtonRightContainerSignUp = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: 3.4rem;
`;

const Button2 = styled.button`
  border: none;
  border-radius: 0.5rem;
  background-color: ${(props) => (props.disabled ? '#D9D9D9' : 'black')};
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const NameInput = styled.input.attrs({
    placeholder: '이름',
})`
    width: 100%;
    height: 3.5rem;
    border-radius: 0.3125rem;
    border: 1px solid #949494;
    background: rgba(217, 217, 217, 0.01);
    padding-left: 1.2rem;
    box-sizing: border-box;

    color: #898989;

    font-family: Inter;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &::placeholder {
        color: #898989;
        font-family: Inter;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;

const IDInput = styled.input.attrs({
    placeholder: 'ID',
})`
    width: 100%;
    height: 3.5rem;
    border-radius: 0.3125rem;
    border: 1px solid #949494;
    background: rgba(217, 217, 217, 0.01);
    padding-left: 1.2rem;
    box-sizing: border-box;

    color: #898989;

    font-family: Inter;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &::placeholder {
        color: #898989;
        font-family: Inter;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;

const PWInput = styled.input.attrs({
    placeholder: 'PW',
})`
    width: 100%;
    height: 3.5rem;
    border-radius: 0.3125rem;
    border: 1px solid #949494;
    background: rgba(217, 217, 217, 0.01);
    padding-left: 1.2rem;
    box-sizing: border-box;

    color: #898989;

    font-family: Inter;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &::placeholder {
        color: #898989;
        font-family: Inter;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;

const PW2Input = styled.input.attrs({
    placeholder: 'PW 재입력',
})`
    width: 100%;
    height: 3.5rem;
    border-radius: 0.3125rem;
    border: 1px solid #949494;
    background: rgba(217, 217, 217, 0.01);
    padding-left: 1.2rem;
    box-sizing: border-box;

    color: #898989;

    font-family: Inter;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &::placeholder {
        color: #898989;
        font-family: Inter;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 46.5rem;
    height: 16.25rem;
    background-color: white;
    padding: 2rem;
    border-radius: 0.625rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    gap: 3rem;
`;

const ModalButton = styled.div`
    display: flex;
    width: 15.5625rem;
    height: 4.375rem;
    flex-direction: column;
    justify-content: center;
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 19.1875rem;
    height: 4.375rem;
    border-radius: 0.625rem;
    background: #383838;

    cursor: pointer;

`

const SignUpFont = styled.div`
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

`;

const ImageBox = styled.div`
    position: absolute;
    z-index: 0;
    bottom: 0;          // Position it at the bottom
    left: 0;            // Position it at the left
    opacity: 0.5;
    width: 30rem;       // 원하는 너비로 조절
    height: auto;       // 비율에 맞춰 자동 높이 조절
    overflow: hidden;   // 자식 요소가 div를 넘어가지 않도록
`;

// 이미지 태그에 스타일을 추가
const Image = styled.img`
    width: 100%;        // ImageBox의 너비에 맞게 조절
    height: auto;       // 비율 유지
`;

const Line = styled.div`
    background: #8A8A8A;
    width: 80%;
    height: 0.0625rem; // 1px
`;

const ErrorMessage = styled.div`
    color: red;
    font-size: 0.875rem;
    margin-top: 0.25rem;
    font-family: Inter;
`;