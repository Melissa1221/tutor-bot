/* eslint-disable no-dupe-keys */
/* eslint-disable react/prop-types */

import { Radio, FormControlLabel, Paper, RadioGroup } from '@mui/material';

const OptionsQuestion = ({ options, selectedAnswer, onAnswerChange }) => {
  const handleRadioChange = (event) => {
    onAnswerChange(event.target.value);
  };

  return (
    <Paper sx={{ 
      padding: '1rem',
      borderRadius: '10px', 
      background: 'linear-gradient(99deg, rgba(139,204,204,1) 0%, rgba(69,102,102,1) 100%)', 
      width: '80%',
      textAlign: 'left',
    }}>
      <RadioGroup value={selectedAnswer} onChange={handleRadioChange}>
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={index.toString()}  // Cambiado a índice
            control={<Radio />}
            label={option}
          />
        ))}
      </RadioGroup>
    </Paper>
  );
};

export default OptionsQuestion;