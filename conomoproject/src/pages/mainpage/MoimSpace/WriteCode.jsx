import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomColumn from '../../../components/container/CustomColumn';
import CustomRow from '../../../components/container/CustomRow';
import CustomFont from '../../../components/container/CustomFont';
import StyledImg from '../../../components/container/StyledImg';

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
  gap: 2rem;
  position: relative;
  background-color: white;
  padding: 2rem;
`;

const CodeContainer = styled.textarea`
  background-color: #1e1e1e;
  color: white;
  font-family: 'Courier New', Courier, monospace;
  padding: 1rem;
  border-radius: 8px;
  height: 30vh;
  overflow-y: auto;
  margin-top: 1rem;
  white-space: pre-wrap;
  width: 100%;
  resize: none;
  transition: all 0.5s ease;
`;

const ImageContainer = styled.img`
  width: 100%;
  margin-top: 2rem;
`;

const PlaceholderImageContainer = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed #d9d9d9;
  color: #d9d9d9;
  font-size: 3rem;
  margin-top: 2rem;
`;

const ContentContainer = styled.div`
  background-color: #f1f1f1;
  padding: 1rem;
  border-radius: 8px;
  width: 90%;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  width: 90%;
  margin-top: 1rem;
  overflow-x: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    height: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 1rem;
  }
`;

const Button = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 8px;
  background-color: ${({ isSelected }) => (isSelected ? ' #9ACBFF' : '#D9D9D9')}; // 선택된 버튼은 파란색. 기본 회색
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? '#5FACFF' : '#bbb')};
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
  border-radius: 8px;
  text-align: center;
`;

const WriteCodePage = () => {
    const navigate = useNavigate();
    const [currentCode, setCurrentCode] = useState('');
    const [solutions, setSolutions] = useState([]);
    const [selectedSolution, setSelectedSolution] = useState(null);
    const [finalSolutionIndex, setFinalSolutionIndex] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [imageUploaded, setImageUploaded] = useState(false);
    const [imgSrc, setImgSrc] = useState('');
    const [isAddingNewSolution, setIsAddingNewSolution] = useState(false);

    const handleAddSolution = () => {
        setCurrentCode(''); // 풀이 입력란 초기화
        setSelectedSolution(solutions.length); // 새로운 풀이 추가 시 새로운 풀이가 선택됨
        setIsAddingNewSolution(true); // 새로운 풀이 추가 중으로 상태 변경
    };

    const handleSaveSolution = () => {
        if (!currentCode.trim()) {
            setModalContent('풀이를 입력해주세요.');
            setIsModalVisible(true);
            setTimeout(() => {
                setIsModalVisible(false);
            }, 1000);
            return;
        }
        if (selectedSolution !== null) {
            const updatedSolutions = [...solutions];
            updatedSolutions[selectedSolution] = currentCode;
            setSolutions(updatedSolutions);
            setIsAddingNewSolution(false); // 저장 후 새로운 풀이 추가 상태 해제
            setModalContent('풀이가 저장/수정되었습니다!');
            setIsModalVisible(true);
            setTimeout(() => {
                setIsModalVisible(false);
            }, 3000);
        }
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const imgSrc = URL.createObjectURL(e.target.files[0]);
            setImgSrc(imgSrc);  // 이미지 경로를 상태로 저장
            setImageUploaded(true);  // 이미지가 업로드되었음을 표시
        }
    };

    const handleSetAsFinalSolution = () => {
        if (selectedSolution !== null) {
            setFinalSolutionIndex(selectedSolution);
            setModalContent('최종 코드로 결정되었습니다!');
            setIsModalVisible(true);
            setTimeout(() => {
                setIsModalVisible(false);
            }, 3000);
        }
    };

    const handleSubmit = () => {
        if (finalSolutionIndex === null) {
            setModalContent('최종코드를 결정하셔야 합니다!');
            setIsModalVisible(true);
            setTimeout(() => {
                setIsModalVisible(false);
            }, 1000);
        } else if (!imageUploaded) {
            setModalContent('최종코드 성공 인증 이미지를 첨부하셔야 합니다!');
            setIsModalVisible(true);
            setTimeout(() => {
                setIsModalVisible(false);
            }, 1000);
        } else {
            setModalContent('제출 중...');
            setIsModalVisible(true);
            setTimeout(() => {
                setModalContent('코드가 정상적으로 제출되었습니다!');
                setTimeout(() => {
                    setIsModalVisible(false);
                }, 3000);
            }, 3000);
        }
    };

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='1rem'>
                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                        <CustomFont color='black' font='2rem' fontWeight='bold'>문제 제목</CustomFont>
                    </CustomRow>
                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                        <CustomFont color='black' font='1.5rem'>코테 제목1</CustomFont>
                    </CustomRow>
                </CustomColumn>

                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='1rem'>
                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                        <CustomFont color='black' fontWeight='bold' font='2rem'>문제 설명</CustomFont>
                    </CustomRow>
                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                        <CustomFont color='black' font='1rem'>코테 본문1</CustomFont>
                    </CustomRow>
                </CustomColumn>

                <ButtonRow>
                    <Button onClick={handleAddSolution}>+ 풀이추가</Button>
                    {solutions.map((solution, index) => (
                        <Button
                            key={index}
                            onClick={() => {
                                setSelectedSolution(index);
                                setCurrentCode(solution);
                                setIsAddingNewSolution(false); // 기존 풀이 선택 시 새로운 풀이 추가 상태 해제
                            }}
                            isSelected={selectedSolution === index} // 선택된 풀이(n) 버튼의 배경색을 파란색으로 설정
                        >
                            {finalSolutionIndex === index ? '최종풀이' : `풀이(${index + 1})`}
                        </Button>
                    ))}
                </ButtonRow>

                {selectedSolution !== null && (
                    <CustomColumn width='90%' alignItems='center' justifyContent='center'>

                        <CodeContainer
                            value={currentCode}
                            onChange={(e) => setCurrentCode(e.target.value)}
                            placeholder="여기에 코드를 입력하세요"
                        />
                        <CustomRow width='100%' alignItems='center' justifyContent='flex-end' gap='1rem'>
                            <Button onClick={handleSaveSolution}>풀이저장/수정</Button>
                            {!isAddingNewSolution && (
                                <Button onClick={handleSetAsFinalSolution}>최종코드로 결정하기</Button>
                            )}
                        </CustomRow>
                    </CustomColumn>
                )}

                <CustomRow width='90%' alignItems='center' justifyContent='center'>
                    {imageUploaded ? (
                        <ImageContainer src={imgSrc} id="img-preview" alt="증빙 이미지" />
                    ) : (
                        <PlaceholderImageContainer>
                            <input
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="image-upload"
                                onChange={handleImageChange}
                            />
                            <label htmlFor="image-upload" style={{ cursor: 'pointer' }}>+</label>
                            <CustomFont color='#D9D9D9' font='1rem' fontWeight='bold'>최종코드 성공 인증 이미지 첨부하기</CustomFont>
                        </PlaceholderImageContainer>
                    )}
                </CustomRow>

                <ContentContainer>
                    <textarea
                        placeholder="느낀 점, 배운 점을 기록하세요."
                        style={{
                            width: '100%',
                            height: '10vh',
                            borderRadius: '0.5rem',
                            padding: '1rem',
                            border: '1px solid black',
                            fontSize: '1rem',
                            color: 'black',
                            '::placeholder': {
                                color: '#D9D9D9',
                                fontSize: '1rem',
                            },
                        }}
                    />

                </ContentContainer>

                <CustomRow width='90%' alignItems='center' justifyContent='flex-end'>
                    <Button onClick={handleSubmit}>코드 제출/수정</Button>
                </CustomRow>
            </PageContainer>

            {isModalVisible && (
                <ModalBackground>
                    <Modal>{modalContent}</Modal>
                </ModalBackground>
            )}
        </ContainerCenter>
    );
};

export default WriteCodePage;
