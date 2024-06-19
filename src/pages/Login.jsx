import React from 'react'
const ContainerPrincipal = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    background: 'linear-gradient(99deg, rgba(139,204,204,1) 0%, rgba(69,102,102,1) 100%)',
    padding: '0',
    margin: '0',
});
const Login = () => {
  return (
    <ContainerPrincipal>
      <h1>Inicio de sesión</h1>
    </ContainerPrincipal>
  )
}

export default Login