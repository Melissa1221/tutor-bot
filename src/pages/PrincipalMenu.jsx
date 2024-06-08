import React from 'react'
import SidebarUser from '../components/SidebarUser'
import styled from 'styled-components'
import { Container } from '@mui/material'

const ContainerMenuPrincipal = styled('div')({
    display: 'flex',
    justifyContent: 'flex-start',
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
const PrincipalMenu = () => {
  return (
    <>
        <ContainerMenuPrincipal>
            <SidebarUser email='ricardo.ulloa.v@uni.pe'/>
        </ContainerMenuPrincipal>
    </>
    

  )
}

export default PrincipalMenu