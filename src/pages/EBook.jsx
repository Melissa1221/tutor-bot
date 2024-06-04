import React from 'react'
import styled from 'styled-components';

import Navbar from '../components/Navbar';

const ContainerEBookGrid = styled('a')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateRows: '1fr 1fr',
  gap: '50px',
  padding: '20px',
  margin: '0',
  color: '#333',
  
})

const ContainerEbook = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'var(--secondary-color)',
  width: '100vw',
  height: '100vh',
  marginTop: '1rem'
})

const Image = styled('img')({
  width: '10rem',
})
const EBook = () => {
  return (
    <ContainerEbook>
      <Navbar/>
      <ContainerEBookGrid>
        <a href=''>
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
          <p>Python</p>
        </a>
        <a href=''>
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
          <p>Java</p>
        </a>
        <a href=''>
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
          <p>Javascript</p>
        </a>
        <a href=''>
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
          <p>C++</p>
        </a>
        <a href=''>
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rstudio/rstudio-original.svg" />
          <p>R</p>
        </a>
        <a href='https://github.com/devicons/devicon/'>
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" />
          <p>Swift</p>
        </a>
        
      </ContainerEBookGrid>
      </ContainerEbook>
      
    
  )
}

export default EBook