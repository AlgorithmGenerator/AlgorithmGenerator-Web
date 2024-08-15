import React, { useState } from 'react';
import styled from 'styled-components';
import CustomColumn from '../../../../components/container/CustomColumn';
import CustomRow from '../../../../components/container/CustomRow';
import CustomFont from '../../../../components/container/CustomFont';
import StyledImg from '../../../../components/container/StyledImg';

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  width: ${(props) => props.width || '6rem'};

  background-color: ${(props) => props.color || '#e0e0e0'};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.6;
  }
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

const NumInput = styled.input.attrs({
    placeholder: '숫자만 입력이 가능합니다.',
})`
  width: 80%;
  height: 1rem;

  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 1rem;
  box-sizing: border-box;

  &::placeholder {
    color: #D9D9D9;
    font-size: 0.8rem;
  }
`;

const MakePeroid = ({ onOpenModal, onCloseModal }) => {

    const handleModalConfirm = (newContent) => {
        onOpenModal('처리 중...');
        setTimeout(() => {
            onOpenModal(newContent);
        }, 3000);
    };

    return (
        <Grid>
            <CustomColumn width='90%' height='15vh' alignItems='center' justifyContent='space-between' gap='1rem'>
                <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.2rem'>
                    <CustomFont color='black' font='1.2rem' fontWeight='bold'>출제/제출 주기 변경</CustomFont>
                    <CustomFont color='black' font='0.8rem'>기본 설정 주기는 7일입니다.</CustomFont>
                </CustomColumn>

                <Button
                    onClick={() => {
                        onOpenModal(
                            <CustomColumn width='100%' height='18vh' alignItems='center' justifyContent='space-between' gap='1.5rem'>
                                <CustomFont color='black' font='1.2rem' fontWeight='bold'>변경하실 주기를 입력하세요.</CustomFont>

                                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                                    <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                                        <NumInput />
                                        <CustomFont color='black' font='1rem'>일</CustomFont>
                                    </CustomRow>
                                    <CustomRow width='90%' alignItems='center' justifyContent='space-between' gap='0.5rem'>
                                        <Button
                                            onClick={() => handleModalConfirm('주기가 변경되었습니다!')}
                                        >
                                            확인
                                        </Button>
                                        <Button onClick={onCloseModal}>취소</Button>
                                    </CustomRow>
                                </CustomColumn>
                            </CustomColumn>
                        );
                    }}
                >
                    <CustomFont color='black' font='1rem'>변경하기</CustomFont>
                </Button>

            </CustomColumn>
        </Grid>
    );
};

export default MakePeroid;
