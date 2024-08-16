import React from 'react';
import styled from 'styled-components';
import CustomColumn from '../../container/CustomColumn';
import CustomRow from '../../container/CustomRow';
import CustomFont from '../../container/CustomFont';

// 각 달마다 몇일인지 
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// 사용자 행동 데이터를 임의로 생성
// 예시: 1월 1일 ~ 2월 13일
// 나중에 서버로부터 n월 n일 사용자가 n회 코드를 저장했는지 받아오도록 수정해야함 
const userActivityData = [
    4, 2, 7, 0, 7, 9, 3, 3, 8, 10, 1, 5, 6, 2, 0, 3, 8, 9, 4, 2, 7, 0, 6, 5, 3, 2, 1, 10, 8, 9, 0, // 1월
    5, 3, 4, 2, 7, 8, 9, 6, 5, 3, 1, 4,
];

// 각 날짜의 색상을 투명도를 기준으로 결정하는 함수
const getOpacity = (count) => {
    if (count === 0) return 0; // 투명도 100%
    if (count >= 10) return 1; // 투명도 0%
    if (count >= 8) return 0.6; // 투명도 40%
    if (count >= 5) return 0.7; // 투명도 30%
    if (count >= 2) return 0.9; // 투명도 10%
    return 0; // 행동이 없는 경우 투명도 100%
};

// 각 날짜의 색상을 결정하는 함수
const getColor = (count) => {
    const opacity = getOpacity(count);
    return `rgba(52, 255, 41, ${opacity})`;
};

// 각 칸의 스타일
const CalendarDay = styled.div`
    width: 5rem;
    height: ${({ height }) => height}px;
    background-color: ${({ count }) => getColor(count)};
    border: 1px solid #AFAFAF;
`;

const MonthContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 500px;
`;

const MonthLabel = styled.div`
    font-size: 12px;
    color: white;
    background-color: #383838;
    padding: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
`;

const UserGreen = () => {
    let dataIndex = 0;

    return (

        <CustomRow width='100%' alignItems='center' justifyContent='flex-end' gap='0'>
            {daysInMonth.map((days, monthIndex) => {
                const cellHeight = 480 / days; // 각 칸의 높이를 해당 월의 일수에 따라 조정!
                return (
                    <MonthContainer key={monthIndex}>
                        <MonthLabel>{monthIndex + 1}월</MonthLabel>
                        {Array.from({ length: days }).map((_, dayIndex) => {
                            const count = userActivityData[dataIndex] || 0;
                            dataIndex++;
                            return <CalendarDay key={dayIndex} count={count} height={cellHeight} />;
                        })}
                    </MonthContainer>
                );
            })}
        </CustomRow>

    );
};

export default UserGreen;
