/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Container, Typography } from '@mui/material';
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const [questions] = useState([
        {
            question: '¿Cuál es el resultado de ejecutar el siguiente código en Java?',
            options: ['a) Output: Hello World!', 'b) Output: Hello', 'c) Output: World!', 'd) Output: Error'],
            answer: 0
        },
        {
            question: '¿Qué tipo de variable existe en Java y puede tener cualquier valor entre entre dos valores definidos?',
            options: ['a) Integer', 'b) Float', 'c) String', 'd) Enum'],
            answer: 3
        },
        {
            question: '¿Cuál es el método que se utiliza para arreglar un arreglo en Java?',
            options: ['a) sort()', 'b) reverse()', 'c) shuffle()', 'd) forEach()'],
            answer: 0
        },
        {
            question: '¿Qué es un método en Java?',
            options: ['a) Un conjunto de comandos para ejecutar en el terminal', 'b) Un conjunto de sentencias para realizar una tarea', 'c) Un block de código que se puede llamar varias veces', 'd) Un ciclo iterativo'],
            answer: 2
        },
        {
            question: '¿Qué es un booleano en Java?',
            options: ['a) Un tipo de dato numérico', 'b) Un tipo de dato de texto', 'c) Un tipo de dato lógico', 'd) Un tipo de dato de fecha'],
            answer: 2
        }
    ]);

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

    const submitAnswers = useCallback(() => {
        const grade = calculateGrade(questions, userAnswers);
        navigate('/score', { state: { grade } });
    });

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
                <Typography variant='h3' sx={{ fontFamily: 'Lily Script One' }}>Tutor Bot</Typography>
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
