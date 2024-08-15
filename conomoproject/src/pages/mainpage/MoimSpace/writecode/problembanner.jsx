import React, { useState } from 'react';
import styled from 'styled-components';
import CustomColumn from '../../../../components/container/CustomColumn';
import CustomRow from '../../../../components/container/CustomRow';
import CustomFont from '../../../../components/container/CustomFont';
import StyledImg from '../../../../components/container/StyledImg';

// 서버로부터 받아오는 문제제목, 내용 부분 분리했습니당 

const ProblemBanner = () => {

    return (
        <>
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

        </>
    );
};

export default ProblemBanner;
