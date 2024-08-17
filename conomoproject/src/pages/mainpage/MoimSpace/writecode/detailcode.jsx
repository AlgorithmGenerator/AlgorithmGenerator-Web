import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomColumn from '../../../../components/container/CustomColumn';
import CustomRow from '../../../../components/container/CustomRow';
import CustomFont from '../../../../components/container/CustomFont';
import StyledImg from '../../../../components/container/StyledImg';
import ProblemBanner from './problembanner';

// 코드 상세보기 클릭 시 이동하는
// 각 문제별 코드들 + 인증사진 + 느낀점 보기 페이지입니다 (제출/수정x)
// 피그마의 '화면7) 각 회차 상세내용 보기'에 해당함 

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
  gap: 6rem;
  position: relative;
  background-color: #2C2C2C;
  padding: 2rem;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
`;

const CodeContainer = styled.div`
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
  transition: all 0.5s ease;

  /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #D9D9D9;
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 1rem;
  }
`;

const ImageContainer = styled.img`
  width: 100%;
`;

const ContentContainer = styled.div`
  background-color: #383838;
  padding: 1rem;
  border-radius: 8px;
  width: 100%;
  height: 10rem;
  gap: 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;
  overflow-x: auto;
  white-space: nowrap;

  /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    height: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #D9D9D9;
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
  border-radius: 5px;
  background-color: #383838;
  cursor: pointer;
  font-size: 1rem;

  transition: opacity 0.3s ease;

&:hover {
  opacity: 0.6;
}
`;

const Divider = styled.div`
background-color: #828282;
width: 100%;
height: 1px;
`;

const DetailCodePage = () => {
  const navigate = useNavigate();

  const originalCode = `
N = int(input())
words = [input() for _ in range(N)]

count = 0
for word in words:
    seen = set()
    prev = ''
    for char in word:
        if char != prev:
            if char in seen:
                break
            seen.add(char)
        prev = char
    else:
        count += 1

print(count)
  `;

  const alternativeCode = `
word = input()
croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]
count, i = 0, 0

while i < len(word):
    for now in croatia:
        if word[i:i+len(now)] == now:
            i += len(now)
            break
    else:
        i += 1
        count += 1

print(count)
  `;

  const [currentCode, setCurrentCode] = useState(originalCode);
  const [isOriginalCode, setIsOriginalCode] = useState(true);

  const handleToggleCode = () => {
    if (isOriginalCode) {
      setCurrentCode(alternativeCode);
    } else {
      setCurrentCode(originalCode);
    }
    setIsOriginalCode(!isOriginalCode);
  };

  return (
    <ContainerCenter>
      <PageContainer>
        <ProblemBanner />

        <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='0.5rem'>
          <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
            <CustomColumn alignItems='center' justifyContent='center' gap='0'>
              <CustomFont color='#828282' fontWeight='bold' font='1.5rem'>소스코드 제출</CustomFont>
              <Divider />
            </CustomColumn>
          </CustomRow>

          <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
            <ButtonRow>
              <Button onClick={() => setCurrentCode(originalCode)}>
                <CustomFont color='white' font='1rem'>최종코드</CustomFont>
              </Button>
              <Button onClick={handleToggleCode}>
                <CustomFont color='white' font='1rem'>다른풀이(1)</CustomFont>
              </Button>
              {/* 다른 풀이가 추가될수록 버튼이 늘어나야 한다 */}
            </ButtonRow>

            {/* 서버로부터 사용자가 제출한 코드들을 받아와서 띄우는 부분 */}
            <CodeContainer>
              {currentCode}
            </CodeContainer>
          </CustomColumn>
        </CustomColumn>

        <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='0.5rem'>
          <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
            <CustomColumn alignItems='center' justifyContent='center' gap='0'>
              <CustomFont color='#828282' fontWeight='bold' font='1.5rem'>코드 통과 인증 이미지</CustomFont>
              <Divider />
            </CustomColumn>
          </CustomRow>
          <ImageContainer src={'ex_certificateImg.png'} alt="증빙 이미지" />
        </CustomColumn>

        <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='0.5rem'>
          <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
            <CustomColumn alignItems='center' justifyContent='center' gap='0'>
              <CustomFont color='#828282' fontWeight='bold' font='1.5rem'>느낀 점/배운 점</CustomFont>
              <Divider />
            </CustomColumn>
          </CustomRow>
          <ContentContainer>
            <CustomFont color='white' font='1rem'>이러쿵저러쿵 너무 어려웠엉</CustomFont>
          </ContentContainer>
        </CustomColumn>

        <CustomRow width='90%' alignItems='center' justifyContent='flex-end' gap='1rem'>
          <Button onClick={() => navigate('/writecodepage')}>
            <CustomFont color='white' font='1rem' fontWeight='bold'>수정/제출하기</CustomFont>
          </Button>
        </CustomRow>
      </PageContainer>
    </ContainerCenter>
  );
};

export default DetailCodePage;
