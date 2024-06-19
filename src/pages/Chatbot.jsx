/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import imageChatbot from '../assets/images/chatbotImage.png'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button' 
import Container from '@mui/material/Container'
import ChatbotInteraction from '../components/ChatbotInteraction'
import Navbar from '../components/NavbarEbooks'

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
  width: '50%',
  alignSelf: 'center',
  overflow: 'hidden',
  boxSizing: 'border-box'
//  backgroundColor: 'var(--secondary-color)',
})



const Chatbot = () => {
  return (
    <>
    <div style={{display:'flex', flexDirection: 'column'}}>
      <ContainerChatbotMenuPrincipal>
              <LogoDiv>
                  <Navbar page='Regresar' route='/principalmenu'/>
                  <Image src={imageChatbot} alt='logo tutor bot'/>
                  <Typography variant='h3' sx={{fontFamily: 'Lily Script One'}}>Tutor Bot</Typography>
                  
              </LogoDiv>
              <ChatbotInteraction />
          </ContainerChatbotMenuPrincipal>    
    </div>  
    </>
  )
}

export default Chatbot