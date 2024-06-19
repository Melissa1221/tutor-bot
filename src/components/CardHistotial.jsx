import { Card } from "@mui/material"
import styled from "styled-components"
import QuizIcon from '@mui/icons-material/Quiz';
import PropTypes from 'prop-types';

const CardCustom = styled(Card)({
    backgroundColor:'#D9D9D9',
    width: '300px',
    height: '70px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: '1rem'
})
const CardHistotial = ({topic, score}) => {
CardHistotial.propTypes = {
  topic: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
};

  return (
    <CardCustom>
        <QuizIcon sx={{fontSize: '40px'}}/>
        <h3>{topic}</h3>
        <h3>{score}</h3>
    </CardCustom>
  )
}

export default CardHistotial
