/* eslint-disable no-undef */
import { useState } from 'react';
import { Container } from '@mui/material';
import styled from 'styled-components';
import BotMessage from './BotMessage';
import UserMessage from './UserMessage';
import InputUserChat from './InputUserChat';

const GeneralContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    backgroundColor: '#e9ebff',
    padding: '0',
    margin: '0',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
})

const CustomContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 'calc(100vh - 80px)',
    backgroundColor: '#e9ebff',
    borderRadius: '10px',
    padding: '2rem',
    
    overflowY: 'auto',
    marginBottom: '80px',

})


const ChatbotInteraction = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Bienvenido al chat en vivo de Tutobot! Mi nombre es Tutobot bot. En qué puedo servirte el día de hoy? Coméntame de cuáles temas quieres un resumen el día de hoy.' },
  ]);

  const handleSendMessage = (...output) => {
    setMessages([...messages, ...output]);
    // Aquí puedes añadir la lógica para enviar el mensaje a la IA y recibir la respuesta
  };


  return (
    <>
    <GeneralContainer>
        <CustomContainer>
            {messages.map((msg, index) =>
            msg.type === 'bot' ? (
                <BotMessage key={index} message={msg.text} />
            ) : (
                <UserMessage key={index} message={msg.text} />
            )
            )}
            
        </CustomContainer>
        <InputUserChat onSendMessage={handleSendMessage} />
    </GeneralContainer>
      
    </>
  );
};

export default ChatbotInteraction;
