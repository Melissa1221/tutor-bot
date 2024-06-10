/* eslint-disable react/prop-types */

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AppBar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const Navbar = ({page, route}) => {
  return (
    <AppBar 
    sx={{display:'flex',
        flexDirection:'row',
        justifyContent:'left',
        alignItems:'center'
        ,padding:'20px',   
        gap: '20px',
        // backgroundColor: backgroundColor ? backgroundColor : 'var(--secondary-color)',
        backgroundColor:'transparent',
        boxShadow: 'none',
        
    }}

    >
        <Link to = {route} style={{textDecoration:'none'}}>
        <ArrowBackIcon/>
      </Link>
        
        <Typography variant='h5'>{page}</Typography>
    </AppBar>
  )
}

export default Navbar