
import PrincipalMenuOptions from '../components/PrincipalMenuOptions'
import SidebarUser from '../components/SidebarUser'
import styled from 'styled-components'


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

const PrincipalMenu = () => {
  return (
    <>
        <ContainerMenuPrincipal>
            <SidebarUser email='ricardo.ulloa.v@uni.pe' name='Ricardo'/>
            <PrincipalMenuOptions/>
        </ContainerMenuPrincipal>
    </>
    

  )
}

export default PrincipalMenu