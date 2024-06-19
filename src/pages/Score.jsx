import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/NavbarEbooks';

const ContainerQuizMenuPrincipal = styled('div')({
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

const ScoreQuizDiv = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    borderRadius: '10px',
    height: '80%',
    backgroundColor: '#fff',
    padding: '1.5rem',
    gap: '1rem',
});

const FinalScoreDiv = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    alignSelf: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    borderRadius: '10px',
    height: '10%',
    backgroundColor: 'var(--secondary-color)',
    padding: '1rem',
    gap: '1rem',
});

const Score = () => {
    const location = useLocation();
    const { grade } = location.state || { grade: 0 }; // Default to 0 if grade is not provided

    return (
        <ContainerQuizMenuPrincipal>
            <Navbar page='Regresar' route='/principalmenu' />
            <ScoreQuizDiv>
                <h1>Resultado obtenido</h1>
                <FinalScoreDiv>
                    <h2>Calificación: {grade}</h2>
                </FinalScoreDiv>
            </ScoreQuizDiv>
        </ContainerQuizMenuPrincipal>
    );
};

export default Score;
