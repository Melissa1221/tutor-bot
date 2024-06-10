
import PropTypes from 'prop-types';
import styled from 'styled-components'

const ButtonHome = styled('button')({
    backgroundColor: 'var(--secondary-color)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  })
const ButtonStyled = ({text}) => {
    
  return (
    <ButtonHome>
        {text}
    </ButtonHome>
  )
}

ButtonStyled.propTypes = {
  text: PropTypes.string.isRequired
};

export default ButtonStyled