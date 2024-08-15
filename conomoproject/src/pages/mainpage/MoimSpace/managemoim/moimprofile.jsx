import React, { useState } from 'react';
import styled from 'styled-components';
import CustomColumn from '../../../../components/container/CustomColumn';
import CustomRow from '../../../../components/container/CustomRow';
import CustomFont from '../../../../components/container/CustomFont';
import StyledImg from '../../../../components/container/StyledImg';

const ProfileImage = styled.img`
  width: 25rem;
  height: 13rem;
  border-radius: 8px;
  object-fit: cover;

  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.6;
  }
`;

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


const MoimProfile = () => {
    const [profileImage, setProfileImage] = useState('cat.png');

    const handleProfileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setProfileImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    return (

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
    );
};

export default MoimProfile;
