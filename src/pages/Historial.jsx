import styled from "styled-components"
import CardHistotial from "../components/CardHistotial"
import Navbar from "../components/NavbarEbooks"
const ContainerCustom = styled('div')({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '100vh',
    width: '100vw',
    backgroundColor: 'var(--secondary-color)',
    padding: '0',
    margin: '0',
})

const HistorialContent = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: 'var(--secondary-color)',
    padding: '0',
    margin: '0',
    gap: '20px',
})
const Historial = () => {
  return (
    <ContainerCustom>
        <HistorialContent>
            <Navbar page='Regresar' route="/principalmenu"/>
            <h2>Exámenes recientes</h2>
            <CardHistotial tema='Recursividad' score='20'/>
        </HistorialContent>
    </ContainerCustom>
  )
}

export default Historial