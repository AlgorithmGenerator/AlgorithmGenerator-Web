import React from 'react';
import styled from 'styled-components';
import CustomColumn from '../../../../components/container/CustomColumn';
import CustomRow from '../../../../components/container/CustomRow';
import CustomFont from '../../../../components/container/CustomFont';
import StyledImg from '../../../../components/container/StyledImg';

const Button = styled.button`
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: none;
  background-color: #5A5A5A;

  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.6;
  }
`;

const Button2 = styled.button`
  width: 80%;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: none;
  background-color: #FF9E9E;

  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.6;
  }
`;

const QuizDiv = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  gap: 0.5rem;
  background-color: #383838;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ManageRandomQuiz = () => {
    const countOptions = ['3개', '6개', '9개'];
    const difficultyOptions = ['전체', 'bronze', 'silver', 'gold', 'dia'];
    const categoryOptions = ['전체', '구현', 'DP', '그리디', '다익스트라', '백트래킹', 'BFS', 'DFS', '재귀'];

    return (
        <QuizDiv>
            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='2rem'>
                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                        <CustomFont color='#BCBCBC' font='1.5rem' fontWeight='bold'>랜덤 문제 출제하기</CustomFont>
                    </CustomRow>

                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start' gap='1rem'>
                        <Button>
                            <CustomFont color='#B1B1B1' font='0.8rem'>마감 주기 변경</CustomFont>
                        </Button>
                        <CustomFont color='#B1B1B1' font='1rem'>현재 제출 마감 주기는 7일입니다.</CustomFont>
                    </CustomRow>
                </CustomColumn>

                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                    <CustomRow width='100%' alignItems='flex-start' justifyContent='space-between'>
                        <CustomFont color='#828282' font='1rem'>출제 개수 필터</CustomFont>
                        <CustomRow width='60%' alignItems='center' justifyContent='flex-start'>
                            <RadioGroup>
                                {countOptions.map((option, index) => (
                                    <label key={index}>
                                        <input type="radio" name="count" value={option} />
                                        <CustomFont color='white' font='1rem'>
                                            {option}
                                        </CustomFont>
                                    </label>
                                ))}
                            </RadioGroup>
                        </CustomRow>
                    </CustomRow>

                    <CustomRow width='100%' alignItems='flex-start' justifyContent='space-between'>
                        <CustomFont color='#828282' font='1rem'>출제 난이도 필터</CustomFont>
                        <CustomColumn width='60%' alignItems='center' justifyContent='center'>
                            <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                                <label>
                                    <input type="radio" name="difficulty" value={difficultyOptions[0]} />
                                    <CustomFont color='white' font='1rem'>
                                        {difficultyOptions[0]}
                                    </CustomFont>
                                </label>
                            </CustomRow>
                            <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                                <RadioGroup>
                                    {difficultyOptions.slice(1).map((option, index) => (
                                        <label key={index}>
                                            <input type="radio" name="difficulty" value={option} />
                                            <CustomFont color='white' font='1rem'>
                                                {option}
                                            </CustomFont>
                                        </label>
                                    ))}
                                </RadioGroup>
                            </CustomRow>
                        </CustomColumn>
                    </CustomRow>

                    <CustomRow width='100%' alignItems='flex-start' justifyContent='space-between'>
                        <CustomFont color='#828282' font='1rem'>출제 카테고리 필터</CustomFont>
                        <CustomColumn width='60%' alignItems='center' justifyContent='center'>
                            <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                                <label>
                                    <input type="radio" name="category" value={categoryOptions[0]} />
                                    <CustomFont color='white' font='1rem'>
                                        {categoryOptions[0]}
                                    </CustomFont>
                                </label>
                            </CustomRow>
                            <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                                <RadioGroup>
                                    {categoryOptions.slice(1).map((option, index) => (
                                        <label key={index}>
                                            <input type="radio" name="category" value={option} />
                                            <CustomFont color='white' font='1rem'>
                                                {option}
                                            </CustomFont>
                                        </label>
                                    ))}
                                </RadioGroup>
                            </CustomRow>
                        </CustomColumn>
                    </CustomRow>
                </CustomColumn>

                <Button2>
                    <CustomFont color='white' font='1.5rem' fontWeight='bold'>출제하기</CustomFont>
                </Button2>
            </CustomColumn>
        </QuizDiv>
    );
};

export default ManageRandomQuiz;
