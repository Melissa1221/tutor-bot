import React from 'react';
import { Box, Typography, Radio, FormControlLabel, FormGroup, Paper, RadioGroup } from '@mui/material';


const OptionsQuestion = ({ questions, selectedAnswer, onAnswerChange }) => {
  const handleRadioChange = (event) => {
    onAnswerChange(event.target.value);
  };

  return (
    <Paper sx={{ 
      padding: '1rem',
      borderRadius: '10px', 
      background:'rgb(139,204,204)',
      background: 'linear-gradient(99deg, rgba(139,204,204,1) 0%, rgba(69,102,102,1) 100%)' , 
      width:'80%',
      textAlign:'left',
      }}>
      <RadioGroup value={selectedAnswer} onChange={handleRadioChange}>
        {questions.map((question, index) => (
          <FormControlLabel
            key={index}
            value={index.toString()}
            control={<Radio />}
            label={question.text}
          />
        ))}
      </RadioGroup>
    </Paper>
  );
};

export default OptionsQuestion;
