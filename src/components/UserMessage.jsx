/* eslint-disable react/prop-types */

import styled from 'styled-components';

import userIcon from '../assets/images/userPhoto.png';
import { Avatar } from '@mui/material';
const UserMessageContainer = styled('div')({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    margin: '10px 0'

})
const IconContainer = styled('div')({
    marginLeft: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
})
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

const UserMessageDiv = styled(MessageDiv)({
  backgroundColor: '#D1E7FF',
  alignSelf: 'flex-end', // Alinea el mensaje del usuario a la derecha
  maxWidth: '60%', // Limita el ancho máximo del mensaje del usuario

});

const IconImage = styled(Avatar)({
    width: '2rem',
    height: '2rem'
  })

const UserMessage = ({ message }) => {
  return (
    <UserMessageContainer>
        <UserMessageDiv>
            {message}
        </UserMessageDiv>
        <IconContainer>
            <IconImage src={userIcon} alt='' />
        </IconContainer>
    </UserMessageContainer>
  );
}

export default UserMessage;
