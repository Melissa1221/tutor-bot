/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Button, SvgIcon, styled } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const CustomButton = styled(Button)({
  background: 'linear-gradient(99deg, rgba(80,65,65,1) 0%, rgba(99,81,81,1) 48%, rgba(182,148,148,1) 100%)',
  width: '5rem',
  display: 'flex',
  alignItems: 'center',
//   justifyContent: 'center',
  color: '#fff',
  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  '&:hover': {
    background: '#B69494',
  },
    '&:active': {
        background: '#B69494',
        border: 0,
    },
    borderRadius: '10px 0 0 10px',
});

const BackButton = ({ onClick }) => {
  return (
    <CustomButton onClick={onClick}>
      <ArrowBackIcon/>
    </CustomButton>
  );
};

export default BackButton;
