import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Navbar from '../components/NavbarEbooks';

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
    width: '70%',
    alignSelf: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    borderRadius: '10px',
    height: '80%',
    backgroundColor: '#fff',
    padding: '1.5rem',
    gap: '1.5rem',
});

const ButtonStyled = styled('button')({
    backgroundColor: '#6B9D9D',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const InputStyled = styled('input')({
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '2rem',
    borderRadius: '5px',
    padding: '0.5rem',
    border: '1px solid #333',
    outline: 'none',
    color: '#333',
    fontSize: '1rem',
    textAlign: 'center',
    '&::placeholder': {
        color: '#fff',
        fontSize: '1rem',
        textAlign: 'center',
    }
});

const CreateQuiz = () => {
    const [topic, settopic] = useState('');
    const [numPreguntas, setNumPreguntas] = useState('');
    const navigate = useNavigate();

    const handletopicChange = (event) => {
        settopic(event.target.value);
    };

    const handleNumPreguntasChange = (event) => {
        setNumPreguntas(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/v1/questionnaires/create', {
                topic: topic,
                num_preg: parseInt(numPreguntas)
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 200) {
                console.log('Quiz creado:', response.data);
                navigate('/quiz', { state: { topic, questions: JSON.parse(response.data.res), questionnaire_id: response.data.id } });
            } else {
                console.error('Error al crear el quiz');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <ContainerQuizMenuPrincipal>
            <CustomContainer>
                <Navbar page='Regresar' route="/principalmenu" />
                <h1>Crear Quiz</h1>
                <h2>Ingresa el topic principal</h2>
                <InputStyled
                    placeholder='topic'
                    value={topic}
                    onChange={handletopicChange}
                />
                <h2>Ingresa el número de preguntas</h2>
                <InputStyled
                    placeholder='Número de preguntas'
                    value={numPreguntas}
                    onChange={handleNumPreguntasChange}
                />
                <Link to='/quiz'>
                  <ButtonStyled onClick={handleSubmit}>Crear Quiz</ButtonStyled>
                </Link>
                
            </CustomContainer>
        </ContainerQuizMenuPrincipal>
    );
}

export default CreateQuiz;
