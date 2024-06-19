// import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import CardHistotial from '../components/CardHistotial';
import Navbar from '../components/NavbarEbooks';
import axios from 'axios'
import { useEffect, useState } from 'react';

const ContainerCustom = styled('div')({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '100vh',
    width: '100vw',
    backgroundColor: 'var(--secondary-color)',
    padding: '0',
    margin: '0',
});

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
});

const Historial = () => {
    //const location = useLocation();
    const [questionnaires, setQuestionaries] = useState([]);
    //const { topic, score } = location.state || { topic: 'Sin tema', score: 0 };

    useEffect(() => {
        const fetchQuestionnaires = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/v1/questionnaires/all/1');

                if (response.status === 200) {
                    setQuestionaries(response.data.questionnaires);
                } else {
                    console.error('Error al obtener los cuestionarios');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchQuestionnaires();
    }, [])


    return (
        <ContainerCustom>
            <HistorialContent>
                <Navbar page='Regresar' route='/principalmenu' />
                <h2>Exámenes recientes</h2>
                {questionnaires.map((questionnaire) => {
                    return (
                       <CardHistotial key={questionnaire.id} topic={questionnaire.title} score={questionnaire.score} />
                    )
                })}
                
            </HistorialContent>
        </ContainerCustom>
    );
};

export default Historial;
