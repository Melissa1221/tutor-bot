/* eslint-disable no-undef */
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
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
  const [tema, setTema] = useState('');

  const handleInputChange = (event) => {
    setTema(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://192.168.0.102:8000/items/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content : tema }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Quiz creado:', data);
      } else {
        console.error('Error al crear el quiz');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
// const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('http://192.168.0.102:8000/items/', { "hola" : "hola" }, 
//         {
//             headers: {
//               Origin: 'http://192.168.0.100:3000' // Replace with your frontend URL
//             }
//           }
//       );
//       console.log('Mensaje enviado:', response.data);
//     } catch (error) {
//       console.error('Error al enviar el mensaje:', error);
//     }
//   };

// const handleSubmit = async () => {
//     const res = await fetch("http://192.168.0.102:8000/items/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: "hola",
//     });
//     const data = await res.json();
//     // setResponse(data.message);
//   };

  return (
    <ContainerQuizMenuPrincipal>
        <CustomContainer>
        <Navbar page='Regresar' route="/principalmenu"/>
      
            <h1>Crear Quiz</h1>
            <h2>Ingresa el tema principal</h2>
            <InputStyled
              placeholder='Tema'
              value={tema}
              onChange={handleInputChange}
            />
            <h2>Ingresa el número de preguntas</h2>
            <InputStyled
              placeholder='Número de preguntas'
            />
            <Link to='/quiz'>
                <ButtonStyled onClick={handleSubmit}>Crear Quiz</ButtonStyled>
            </Link>
            
        </CustomContainer>
    </ContainerQuizMenuPrincipal>
  );
}

export default CreateQuiz;