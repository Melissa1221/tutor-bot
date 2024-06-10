/* eslint-disable react/prop-types */

import { Button,  styled } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


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
    borderRadius: '0 10px 10px 0',
});

const ForwardButton = ({ onClick }) => {
  return (
    <CustomButton onClick={onClick}>
        <ArrowForwardIcon/>
    </CustomButton>
  );
};

export default ForwardButton;
