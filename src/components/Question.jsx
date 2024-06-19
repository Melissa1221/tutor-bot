/* eslint-disable react/prop-types */

import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CustomBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '1rem',
    borderRadius: '10px',
    backgroundColor: '#D9D9D9',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    
    textAlign: 'left',
})
const Question = ({question}) => {
  return (
    <CustomBox >
      <Typography variant='h6'>{question}</Typography>
    </CustomBox>
  )
}

export default Question