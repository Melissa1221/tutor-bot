

import styled from 'styled-components'
import { Link } from 'react-router-dom'
const ButtonStyled = styled('button')({
    backgroundColor: 'var(--primary-color)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color:'#fff'
})


const CustomDiv = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: 'var(--secondary-color)',
    padding: '0',
    margin: '0',
    flexDirection: 'column',
    
})

const DivButtons = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap:'1rem'
})


const PrincipalMenuOptions = () => {
  return (
    <CustomDiv>
        <h1>Accede al conocimiento</h1>
        <DivButtons>
            <Link to='/ebook'>
                <ButtonStyled>Libros de programación</ButtonStyled>
            </Link>
            <Link to='/chatbot'>
                <ButtonStyled>Chatbot y asistente de voz</ButtonStyled>
            </Link>
            <Link to='/createquiz'>
                <ButtonStyled>Prueba tu conocimiento</ButtonStyled>
            </Link>
          

        </DivButtons>
        
    </CustomDiv>
  )
}

export default PrincipalMenuOptions