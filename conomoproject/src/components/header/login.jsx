import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomRow from '../container/CustomRow';
import CustomColumn from '../container/CustomColumn';
import CustomFont from '../container/CustomFont';

const LoginPage = () => {
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [showModal, setShowModal] = useState(false);

    const isButtonDisabled = id === '' || pw === '';

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
            <ImageBox>
                <Image img src="/LogoHD.svg" alt="고양이 이미지" />
            </ImageBox>

            <LoginSmallBoxContainer>
                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem' border-radius="0.3125rem" border="1px #838383" background-color="#2C2C2C">
                    <CustomRow width='50%' alignItems='center' justifyContent='center'>
                        <CustomFont color='white' fontWeight='bold' font='3rem'>로그인</CustomFont>
                    </CustomRow>
                </CustomColumn>

                <Line />

                <CustomColumn width='70%' alignItems='center' justifyContent='center' gap='1rem'>
                    <IDInput value={id} onChange={(e) => setId(e.target.value)} />
                    <PWInput value={pw} onChange={(e) => setPw(e.target.value)} />

                    <ForgetId>? 아이디를 깜빡했어요</ForgetId>

                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start' gap='1rem'>
                        <CustomFont color='#9C9C9C' font='1.25rem' font-family="Inter" font-style="normal" font-weight="400" text-align="center">아직 계정이 없으시다면</CustomFont>
                        <Button onClick={goSignup}>회원가입</Button>
                    </CustomRow>

                    <ButtonRightContainer>
                        <Button2 onClick={doneLogin} disabled={isButtonDisabled}>
                            <LoginFont>로그인</LoginFont>
                        </Button2>
                    </ButtonRightContainer>
                </CustomColumn>

                {showModal && (
                    <ModalBackground>
                        <Modal>
                            <CustomFont color='black' fontWeight='bold' font='1.2rem'>로그인되었습니다!</CustomFont>
                        </Modal>
                    </ModalBackground>
                )}
            </LoginSmallBoxContainer>
        </ContainerCenter>
    );
};

export default LoginPage;

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

const LoginSmallBoxContainer = styled.div`
    width: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    border-radius: 0.3125rem;
    border: 1px #838383;
    background: #2C2C2C;
    height: 65vh;
    z-index: 1;
    position: absolute;
`;

const Button = styled.div`
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
`;

const ButtonRightContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

const Button2 = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 0.5rem;
    background-color: ${(props) => (props.disabled ? '#D9D9D9' : 'black')};
    width: 28%;
    height: 3.5rem;
    padding: 0.5rem;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    margin-top: 5rem;
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
    type: 'password',
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

const ForgetId = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    color: #B4B4B4;
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    text-decoration: underline;
    margin-top: 1rem;
    margin-bottom: 5rem;
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

const LoginFont = styled.div`
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

`;

const Line = styled.div`
    background: #8A8A8A;
    width: 80%;
    height: 0.0625rem; // 1px
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