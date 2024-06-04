import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AppBar, Typography } from '@mui/material';
const Navbar = () => {
  return (
    <AppBar 
    sx={{display:'flex',
        flexDirection:'row',
        justifyContent:'left',
        alignItems:'center'
        ,padding:'20px',   
        gap: '20px',
        backgroundColor:'var(--secondary-color)',
        boxShadow: 'none',
    }}
    >
        <ArrowBackIcon/>
        <Typography variant='h5'>eBooks</Typography>
    </AppBar>
  )
}

export default Navbar