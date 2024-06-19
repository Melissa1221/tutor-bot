/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const TimerQuiz = ({ initialTime, onTimeUp }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time > 0) {
      const timerId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else {
      onTimeUp();
    }
  }, [time, onTimeUp]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
      <Typography variant="h6">
        Tiempo restante: {Math.floor(time / 60)}:{('0' + (time % 60)).slice(-2)}
      </Typography>
    </Box>
  );
};

export default TimerQuiz;
