import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomColumn from '../../../components/container/CustomColumn';
import CustomRow from '../../../components/container/CustomRow';
import CustomFont from '../../../components/container/CustomFont';

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
  padding-bottom: 5vh;
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

const CodeBlock = styled.div`
  margin-bottom: 2rem;
  width: 80%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30vh;
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;
`;

const SubmitCodePage = () => {
  const navigate = useNavigate();

  const codeBlocks = [
    `N = int(input())
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

print(count)`,
    `word = input()
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

print(count)`,
    '', // 3번 문제 코드가 없는 경우
    '', // 4번 문제 코드가 없는 경우
  ];

  return (
    <ContainerCenter>
      <PageContainer>
        <CustomRow width='80%' alignItems='center' justifyContent='flex-start'>
          <CustomFont color='black' font='2rem' fontWeight='bold'>제출내역</CustomFont>
        </CustomRow>

        {codeBlocks.map((code, index) => (
          <CodeBlock key={index}>
            <CustomFont color='black' font='1.5rem'>{index + 1}번</CustomFont>
            {code ? (
              <CodeContainer>
                {code}
              </CodeContainer>
            ) : (
              <ButtonContainer onClick={() => navigate('/writecodepage')}>
                <CustomFont color='black' font='2rem' fontWeight='bold'>+</CustomFont>
                <CustomFont color='black' font='1rem'>제출하기</CustomFont>
              </ButtonContainer>
            )}
          </CodeBlock>
        ))}
      </PageContainer>
    </ContainerCenter>
  );
};

export default SubmitCodePage;
