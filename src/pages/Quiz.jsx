/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Container, Typography } from '@mui/material';
import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import OptionsQuestion from '../components/OptionsQuestion';
import Question from '../components/Question';
import imageChatbot from '../assets/images/chatbotImage.png';
import TimerQuiz from '../components/TimerQuiz';
import BackButton from '../components/BackButton';
import ForwardButton from '../components/ForwardButton';
import CircularProgressWithLabel from '../components/CircularProgressWithLabel';
import Navbar from '../components/NavbarEbooks';
import { calculateGrade } from '../utils/score';
import axios from 'axios'

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
});

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
    padding: '1.5rem',
    gap: '1.5rem',
});

const Image = styled('img')({
    height: '40vmin',
    pointerEvents: 'visibleFill',
});
const LogoDiv = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    alignSelf: 'center',
});

const ButtonDiv = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
});

const Quiz = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { topic, questions, questionnaire_id } = location.state || { topic: 'Quiz', questions: [
        {
            question: '¿Qué es primero, el huevo o la gallina?',
            options: ['a) Huevo', 'b) Gallina'],
            answer: 0
        }
    ], questionnaire_id: 1};

    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [userAnswers, setUserAnswers] = useState([]);
    const [timeUp, setTimeUp] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [progress, setProgress] = useState(((currentQuestion + 1) / questions.length) * 100);

    const handleAnswerChange = (value) => {
        setSelectedAnswer(parseInt(value));
    };

    const handleTimeUp = () => {
        setTimeUp(true);
        submitAnswers();
    };

    const handleBackClick = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setSelectedAnswer(userAnswers[currentQuestion - 1] || null);
        }
    };

    const handleForwardClick = () => {
        if (selectedAnswer !== null) {
            const updatedAnswers = [...userAnswers];
            updatedAnswers[currentQuestion] = selectedAnswer;
            setUserAnswers(updatedAnswers);

            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedAnswer(updatedAnswers[currentQuestion + 1] || null);
            } else {
                submitAnswers();
            }
        } else {
            alert('Por favor selecciona una respuesta.');
        }
    };

    const submitAnswers = useCallback(async () => {
        const score = calculateGrade(questions, userAnswers);
        
        try {
            const response = await axios.put(`${import.meta.env.VITE_REACT_API_URL}/api/v1/questionnaires/${questionnaire_id}/score`, {
                score: score
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 200) {
                console.log('Quiz creado:', response.data);
                navigate('/score', { state: { score, topic } }); // Aquí se pasa "score" y "topic"
            } else {
                console.error('Error al crear el quiz');
            }
        } catch (error) {
            console.error('Error:', error);
        }        
    }, [navigate, questionnaire_id, questions, topic, userAnswers]);

    useEffect(() => {
        setProgress(((currentQuestion + 1) / questions.length) * 100);
    }, [currentQuestion, questions.length]);

    useEffect(() => {
        if (timeUp) {
            submitAnswers();
        }
    }, [submitAnswers, timeUp]);

    return (
        <ContainerQuizMenuPrincipal>
            <LogoDiv>
                <Navbar page='Regresar' route='/principalmenu' />
                <Image src={imageChatbot} alt='logo tutor bot' />
                <Typography variant='h3' sx={{ fontFamily: 'Lily Script One' }}>{topic}</Typography>
                <TimerQuiz initialTime={60} onTimeUp={handleTimeUp} />
                <CircularProgressWithLabel value={progress} />
            </LogoDiv>
            <CustomContainer>
                <Question question={questions[currentQuestion].question} />
                <OptionsQuestion
                    options={questions[currentQuestion].options}
                    selectedAnswer={selectedAnswer !== null ? selectedAnswer.toString() : null}  // Aseguramos que el valor sea una cadena
                    onAnswerChange={handleAnswerChange}
                />
                <ButtonDiv>
                    <BackButton onClick={handleBackClick} />
                    <ForwardButton onClick={handleForwardClick} />
                </ButtonDiv>
            </CustomContainer>
        </ContainerQuizMenuPrincipal>
    );
}

export default Quiz;
