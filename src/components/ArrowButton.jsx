/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Button, SvgIcon, styled } from '@mui/material';

const ArrowIcon = ({ direction, ...props }) => (
  <SvgIcon {...props}>
    <path d={direction === 'left' ? 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z' : 'M12 4l1.41 1.41L7.83 11H20v2H7.83l5.58 5.59L12 20l-8-8z'} />
  </SvgIcon>
);

const CustomButton = styled(Button)(({ direction }) => ({
  background: 'linear-gradient(90deg, rgba(245, 146, 146, 1) 0%, rgba(88, 68, 68, 1) 100%)',
  borderRadius: direction === 'left' ? '10px 0 0 10px' : '0 10px 10px 0',
  minWidth: '48px',
  minHeight: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  '&:hover': {
    background: 'linear-gradient(90deg, rgba(245, 146, 146, 0.9) 0%, rgba(88, 68, 68, 0.9) 100%)',
  },
}));

const ArrowButton = ({ direction, onClick }) => {
  return (
    <CustomButton direction={direction} onClick={onClick}>
      <ArrowIcon direction={direction} />
    </CustomButton>
  );
};

export default ArrowButton;
