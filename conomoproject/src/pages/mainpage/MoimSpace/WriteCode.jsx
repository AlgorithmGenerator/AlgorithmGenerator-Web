import React from 'react';
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
  margin-top: 2rem;
`;

const ContentContainer = styled.div`
  background-color: #f1f1f1;
  padding: 1rem;
  border-radius: 8px;
  width: 100%;
  gap: 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 8px;
  background-color: #ccc;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #bbb;
  }
`;

const WriteCodePage = () => {
    const navigate = useNavigate();

    const codeData = {
        title: '코테 제목1',
        content: '코테 본문1',
        code: `
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
    `,
        imagePath: 'ex_certificateImg.png',
        goodPoints: '이러쿵저러쿵 너무 어려웠엉',
    };

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                        <CustomFont color='black' font='2rem' fontWeight='bold'>문제 제목</CustomFont>
                    </CustomRow>
                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                        <CustomFont color='black' font='1.5rem'>{codeData.title}</CustomFont>
                    </CustomRow>
                </CustomColumn>

                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                        <CustomFont color='black' fontWeight='bold' font='2rem'>문제 설명</CustomFont>
                    </CustomRow>
                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                        <CustomFont color='black' font='0.8rem'>{codeData.content}</CustomFont>
                    </CustomRow>
                </CustomColumn>

                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start' gap='1rem'>
                        <CustomFont color='black' fontWeight='bold' font='1.5rem'>내 코드</CustomFont>
                    </CustomRow>

                    <CodeContainer>
                        {codeData.code}
                    </CodeContainer>
                </CustomColumn>

                <ImageContainer src={codeData.imagePath} alt="증빙 이미지" />

                <ContentContainer>
                    <CustomFont color='black' font='1.2rem' fontWeight='bold'>느낀 점</CustomFont>
                    <CustomFont color='black' font='1rem'>{codeData.goodPoints}</CustomFont>
                </ContentContainer>

                <CustomRow width='100%' alignItems='center' justifyContent='flex-end' gap='1rem'>
                    <Button onClick={() => navigate('/editcode')}>수정(제출)하기</Button>
                    <Button onClick={() => window.location.href = 'https://www.acmicpc.net/'}>백준으로</Button>
                </CustomRow>
            </PageContainer>
        </ContainerCenter>
    );
};

export default WriteCodePage;
