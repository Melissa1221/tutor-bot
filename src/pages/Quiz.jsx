/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'
import OptionsQuestion from '../components/OptionsQuestion'
import Question from '../components/Question'
import imageChatbot from '../assets/images/chatbotImage.png'
import TimerQuiz from '../components/TimerQuiz'
import BackButton from '../components/BackButton'
import ForwardButton from '../components/ForwardButton'
import ProgressIndicator from '../components/ProgressIndicator'
import CircularWithValueLabel from '../components/CircularProgressWithLabel'
import Navbar from '../components/NavbarEbooks'


const ContainerQuizMenuPrincipal = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    background: 'linear-gradient(99deg, rgba(139,204,204,1) 0%, rgba(69,102,102,1) 100%)',
    padding: '0',
    margin: '0',
})

const CustomContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    borderRadius: '10px',
    height: '80%',
    backgroundColor: '#fff',
    padding:'1.5rem',
    gap: '1.5rem',
    
})
const Image = styled('img')({
    height: '40vmin',
    pointerEvents: 'visibleFill',
  })
const LogoDiv = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    alignSelf: 'center',
  //  backgroundColor: 'var(--secondary-color)',
  })

  const ButtonDiv = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
  })
const Quiz = () => {
    const [questions] = useState([
        { text: 'Un bucle que se repite indefinidamente' },
        { text: 'Una función que llama a sí misma' },
        { text: 'Un tipo de estructura de datos en forma de árbol' },
        { text: 'Una variable que almacena la dirección de memoria de otra variable' },
      ]);
    
      const [selectedAnswer, setSelectedAnswer] = useState(null);
      const [timeUp, setTimeUp] = useState(false);
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const progress = ((currentQuestion + 1) / questions.length) * 100;
    
      const handleAnswerChange = (value) => {
        setSelectedAnswer(value);
      };
      const handleTimeUp = () => {
        setTimeUp(true);
        console.log('Time is up!');
      };
      const handleBackClick = () => {
        console.log('Back button clicked');
      };
    
      const handleForwardClick = () => {
        console.log('Forward button clicked');
      };
  return (
    <ContainerQuizMenuPrincipal>
        <LogoDiv>
          
            <Navbar page='Regresar' route='/principalmenu'/>
            <Image src={imageChatbot} alt='logo tutor bot'/>
            <Typography variant='h3' sx={{fontFamily: 'Lily Script One'}}>Tutor Bot</Typography>
            <TimerQuiz initialTime={60} onTimeUp={handleTimeUp} />
            {/* <ProgressIndicator progress={progress} /> */}
            <CircularWithValueLabel value={progress} />
        </LogoDiv>
        <CustomContainer>
            
            <Question question='¿Qué es la recursividad?' />
            <OptionsQuestion
                questions={questions}
                selectedAnswer={selectedAnswer}
                onAnswerChange={handleAnswerChange}
            />
            <ButtonDiv>
                <BackButton onClick={handleBackClick} />
                <ForwardButton onClick={handleForwardClick} />
            </ButtonDiv>
        </CustomContainer>
    </ContainerQuizMenuPrincipal>
  )
}

export default Quiz