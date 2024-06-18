
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import userPhoto from '../assets/images/userPhoto.png';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import { Link } from 'react-router-dom';

const SidebarContainer = styled('div')(({ theme }) => ({
display: 'flex',
flexDirection: 'column',
width: '20%',   
height: '100vh',
backgroundColor: theme.palette.background.paper,
alignItems: 'center',
fontFamily: 'Popins, sans-serif',
paddingLeft: '0',
margin: '0',
boxSizing: 'border-box',
}));

const UserPhoto = styled(Box)(({ theme }) => ({
width: '80%',
height: '10rem',
padding: theme.spacing(2, 0),
display: 'flex',
justifyContent: 'center',
}));

const Image = styled('img')({
width: '70%',
borderRadius: '50%',
});

const UserName = styled(Typography)({
    color: '#fff',
    fontSize: '1.7rem',
    marginBottom: '20px',
    width: '100%',
    textAlign: 'left',
    padding: '0px 3.5rem',
    
});

const ActiveUserEmail = styled(Typography)({
    color: '#fff',
    fontSize: '1rem',
    marginBottom: '1rem',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    padding: '0px 10px',
    flexDirection: 'row',
    gap: '5px',

})

const Circle = styled(Box)({
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#50CE4D',
    marginRight: '5px',
    
})

const SidebarOptions = styled('div')({
    background: 'linear-gradient(180deg, rgba(168,174,227,1) 0%, rgba(56,71,199,1) 56%, rgba(89,93,133,1) 100%)',
flexGrow: 1,
width: '100%',
boxSizing: 'border-box',
paddingTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: '1rem',
    borderRadius: '30px 30px 0 0',
    gap: '10px',
    fontSize: '1.3rem',
    margin: 0
});

const Option = styled(Box)(({ theme }) => ({
display: 'flex',
alignItems: 'center',
justifyContent: 'flex-start',
alignContent: 'center',
padding: theme.spacing(1, 2.5),
color: 'white',
cursor: 'pointer',
'&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
},
}));

const IconWrapper = styled(Box)({
marginRight: '10px',
display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

import PropTypes from 'prop-types';

const SidebarUser = ({name, email}) => {
return (
    <SidebarContainer>
        <UserPhoto>
            <Image src={userPhoto} alt="User Photo"/>
        </UserPhoto>
        <SidebarOptions>
            <UserName>{name}</UserName>
            <ActiveUserEmail><Circle/>{email}</ActiveUserEmail>
            <Link to='/history'><Option><IconWrapper><LibraryBooksIcon /></IconWrapper>Historial</Option></Link>
            
            <Option><IconWrapper><NotificationsIcon /></IconWrapper>Notificaciones</Option>
            <Option><IconWrapper><SettingsIcon /></IconWrapper>Configuración</Option>
            <Option><IconWrapper><HeadphonesIcon /></IconWrapper>Actividades</Option>
            <Link to='/'><Option><IconWrapper><ExitToAppIcon /></IconWrapper>Salir</Option></Link>
        </SidebarOptions>
    </SidebarContainer>
)
}
SidebarUser.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  };
export default SidebarUser;
