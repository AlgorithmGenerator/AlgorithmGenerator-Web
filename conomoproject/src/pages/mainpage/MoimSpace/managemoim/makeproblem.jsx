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

const MakeProblem = ({ onOpenModal, onCloseModal }) => {

    const handleModalConfirm = (newContent) => {
        onOpenModal('처리 중...');
        setTimeout(() => {
            onOpenModal(newContent);
        }, 3000);
    };

    return (
        <CustomColumn width='100%' alignItems='center' justifyContent='space-between' gap='0.5rem'>
            <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                <CustomFont color='black' font='1.2rem' fontWeight='bold'>랜덤 문제 출제하기</CustomFont>
            </CustomRow>
            <Grid>
                <CustomColumn width='90%' height='37vh' alignItems='center' justifyContent='center' gap='0.2rem'>

                    <AlertDiv>
                        <CustomFont color='black' font='0.8rem'>모임의 멤버라면 누구나 출제 가능합니다.</CustomFont>
                        <CustomFont color='black' font='0.8rem'>합의하신 주기마다 '출제' 버튼을 눌러 출제하실 수 있습니다.</CustomFont>
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
                            onOpenModal(
                                <>
                                    <CustomFont color='black' font='1.2rem' fontWeight='bold'>정말로 출제하시겠습니까?</CustomFont>
                                    <CustomRow width='100%' alignItems='center' justifyContent='space-between' gap='0.5rem'>
                                        <Button
                                            color="#ff6b6b"
                                            onClick={() =>
                                                handleModalConfirm('출제가 완료되었습니다!')
                                            }
                                        >
                                            출제하기
                                        </Button>
                                        <Button onClick={onCloseModal}>취소</Button>
                                    </CustomRow>
                                </>
                            );
                        }}
                    >
                        <CustomFont color='white' font='1.5rem' fontWeight='bold'>출제</CustomFont>
                    </Button>
                </CustomColumn>
            </Grid>
        </CustomColumn>
    );
};

export default MakeProblem;
