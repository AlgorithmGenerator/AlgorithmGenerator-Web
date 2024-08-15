import React, { useState } from 'react';
import styled from 'styled-components';
import CustomColumn from '../../../../components/container/CustomColumn';
import CustomRow from '../../../../components/container/CustomRow';
import CustomFont from '../../../../components/container/CustomFont';
import StyledImg from '../../../../components/container/StyledImg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
`;

const ProfileImage = styled.img`
  width: 25rem;
  height: 13rem;
  border-radius: 8px;
  object-fit: cover;
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  width: ${(props) => props.width || '6rem'};

  background-color: ${(props) => props.color || '#e0e0e0'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
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
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
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

const AlertDiv = styled.div`
background-color: #D9D9D9;
border: none;
border-radius: 0.5rem;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
width: 100%;
min-height: 25vh;
padding-top: 0.2rem;
padding-bottom: 0.2rem;
padding-left: 0.5rem;
padding-right: 0.5rem;
`;

const ManageMoimPage = () => {
    const [profileImage, setProfileImage] = useState('cat.png');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [toggleActive, setToggleActive] = useState(true);

    const handleProfileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setProfileImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };

    const handleModalConfirm = (newContent) => {
        setModalContent('처리 중...');
        setTimeout(() => {
            setModalContent(newContent);
        }, 3000);
    };

    const handleToggleClick = () => {
        setToggleActive(!toggleActive);
    };

    return (
        <Container>
            <CustomColumn width='60%' alignItems='center' justifyContent='center' gap='2.5rem'>
                <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                    <CustomFont color='black' font='2rem' fontWeight='bold'>모임 관리</CustomFont>
                </CustomRow>

                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                    <CustomRow width='100%' alignItems='center' justifyContent='space-between' gap='1rem'>
                        <CustomColumn width='100%' alignItems='center' justifyContent='space-between' gap='0.5rem'>
                            <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                                <CustomFont color='black' font='1.2rem' fontWeight='bold'>모임 프로필 추가/변경하기</CustomFont>
                            </CustomRow>
                            <Grid>
                                <CustomColumn width='90%' height='37vh' alignItems='center' justifyContent='center' gap='0.5rem'>

                                    <CustomColumn width='100%' alignItems='flex-end' justifyContent='center' gap='0.2rem'>
                                        <ProfileImage src={profileImage} alt="Current Profile" />
                                        <input
                                            type="file"
                                            accept="image/*"
                                            style={{ display: 'none' }}
                                            id="profile-upload"
                                            onChange={handleProfileChange}
                                        />
                                        <CustomRow width='100%' alignItems='center' justifyContent='flex-end'>
                                            <Button as="label" htmlFor="profile-upload">
                                                <CustomFont color='black' font='1rem'>변경하기</CustomFont>
                                            </Button>
                                        </CustomRow>
                                    </CustomColumn>
                                </CustomColumn>
                            </Grid>
                        </CustomColumn>

                        <CustomColumn width='100%' alignItems='center' justifyContent='space-between' gap='0.5rem'>
                            <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                                <CustomFont color='black' font='1.2rem' fontWeight='bold'>랜덤 문제 출제하기</CustomFont>
                            </CustomRow>
                            <Grid>
                                <CustomColumn width='90%' height='37vh' alignItems='center' justifyContent='center' gap='0.2rem'>

                                    <AlertDiv>
                                        <CustomFont color='black' font='0.8rem'>모임의 멤버라면 누구나 출제 가능합니다.</CustomFont>
                                        <CustomFont color='black' font='0.8rem'>합의하신 주기마다 '출제' 버튼을 눌러 출제하실 수 있습니다..</CustomFont>
                                        <CustomFont color='black' font='0.8rem'>백준 문제 중 랜덤으로 출제됩니다.</CustomFont>
                                        <CustomFont color='black' font='0.8rem'>카테고리, 난이도, 문제 개수를 선택하실 수 있습니다.</CustomFont>
                                        <CustomFont color='black' font='0.8rem'>출제 후, 설정된 마감 주기에 따라 제출이 마감됩니다.</CustomFont>
                                        <CustomFont color='black' font='0.8rem'>지각 제출은 언제든지 가능합니다.</CustomFont>
                                        <CustomFont color='black' font='0.8rem'>합의하신 주기보다 일찍 '출제' 버튼을 누르실 경우, 출제와 동시에 제출이 마감됩니다.</CustomFont>
                                        <CustomFont color='black' font='0.8rem'>이때, 아직 제출하지 않은 문제가 있는 팀원의 경우 해당 문제는 지각 처리됩니다.</CustomFont>
                                        <CustomFont color='black' font='0.8rem'>모든 팀원이 모든 문제를 제출했는지 확인 후 '출제' 버튼을 눌러주세요.</CustomFont>
                                    </AlertDiv>
                                    <Button
                                        width='100%'
                                        color="#ff6b6b"
                                        onClick={() => {
                                            setModalContent(
                                                <>
                                                    <CustomFont color='black' font='1rem'>정말로 출제하시겠습니까?</CustomFont>
                                                    <Button
                                                        color="#ff6b6b"
                                                        onClick={() =>
                                                            handleModalConfirm('출제가 완료되었습니다!')
                                                        }
                                                    >
                                                        출제하기
                                                    </Button>
                                                    <Button onClick={handleModalClose}>취소</Button>
                                                </>
                                            );
                                            setIsModalOpen(true);
                                        }}
                                    >
                                        <CustomFont color='white' font='1.5rem' fontWeight='bold'>출제</CustomFont>
                                    </Button>
                                </CustomColumn>
                            </Grid>
                        </CustomColumn>

                    </CustomRow>
                    <CustomRow width='100%' alignItems='center' justifyContent='space-between' gap='1rem'>

                        <Grid>
                            <CustomColumn width='90%' height='15vh' alignItems='center' justifyContent='space-between' gap='1rem'>
                                <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.2rem'>
                                    <CustomFont color='black' font='1.2rem' fontWeight='bold'>출제/제출 주기 변경</CustomFont>
                                    <CustomFont color='black' font='0.8rem'>기본 설정 주기는 7일입니다.</CustomFont>
                                </CustomColumn>

                                <Button
                                    onClick={() => {
                                        setModalContent(
                                            <>
                                                <CustomFont color='black' font='2rem' fontWeight='bold'>변경하실 주기를 입력하세요.</CustomFont>
                                                <input type="number" placeholder="일" />
                                                <Button
                                                    onClick={() =>
                                                        handleModalConfirm('주기가 변경되었습니다!')
                                                    }
                                                >
                                                    확인
                                                </Button>
                                                <Button onClick={handleModalClose}>취소</Button>
                                            </>
                                        );
                                        setIsModalOpen(true);
                                    }}
                                >
                                    <CustomFont color='black' font='1rem'>변경하기</CustomFont>
                                </Button>

                            </CustomColumn>
                        </Grid>

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
                    </CustomRow>
                </CustomColumn>

                {isModalOpen && (
                    <ModalBackground>
                        <Modal>
                            {modalContent}
                            {modalContent === '출제가 완료되었습니다!' ||
                                modalContent === '주기가 변경되었습니다!' ? (
                                <Button onClick={handleModalClose}>확인</Button>
                            ) : null}
                        </Modal>
                    </ModalBackground>
                )}
            </CustomColumn>
        </Container>
    );
};

export default ManageMoimPage;
