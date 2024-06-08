import React from 'react'
import styled from 'styled-components'
import imageChatbot from '../assets/images/chatbotImage.png'
import { Typography , Container, Button} from '@mui/material'
import ChatbotInteraction from '../components/ChatbotInteraction'

const ContainerChatbotMenuPrincipal = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: '100vh',
    width: '100vw',
    backgroundColor: 'var(--secondary-color)',
    padding: '0',
    margin: '0',
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
  width: '100%',
  alignSelf: 'center',
//  backgroundColor: 'var(--secondary-color)',
})

const ButtonHome = styled('button')({
    // backgroundColor: 'var(--primary-color)',
    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    
  })

const Chatbot = () => {
  return (
    <>
        <ContainerChatbotMenuPrincipal>
            <LogoDiv>
                <Image src={imageChatbot} alt='logo tutor bot'/>
                <Typography variant='h3' sx={{fontFamily: 'Lily Script One'}}>Tutor Bot</Typography>
                
            </LogoDiv>
            <ChatbotInteraction />
        </ContainerChatbotMenuPrincipal>
    </>
  )
}

export default Chatbot