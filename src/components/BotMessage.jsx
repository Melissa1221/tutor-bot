/* eslint-disable react/prop-types */

import styled from 'styled-components';
import botIcon from '../assets/icons/botIcon.png'


const MessageDiv = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  border: '1px solid #838383',
  borderRadius: '10px',
  width: '100%',
  padding: '10px',
  margin: '10px 0'
});

const BotMessageDiv = styled(MessageDiv)({
  backgroundColor: '#F0F0F0',
  alignSelf: 'flex-start',
  maxWidth: '60%' // Limita el ancho máximo del mensaje del bot
});
const BotMessageContainer = styled('div')({
  display: 'flex',
  alignItems : 'flex-start',
  margin: '10px 0'
})
const IconContainer = styled('div')({
  marginRight: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center'
})
const IconImage = styled('img')({
  width: '2rem',
  height: '2rem'
})
const BotMessage = ({ message }) => {
  return (
    <BotMessageContainer>
      <IconContainer>
        <IconImage src={botIcon} alt='' />
      </IconContainer>
      <BotMessageDiv>
        {message}
      </BotMessageDiv>
    </BotMessageContainer>
  );
}

export default BotMessage;
