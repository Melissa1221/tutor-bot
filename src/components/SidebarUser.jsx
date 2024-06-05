import React from 'react'
import styled from 'styled-components';
import userPhoto from '../assets/images/userPhoto.png';

const UserPhoto = styled('div')({
    display: 'display',
    width: '100%',
    height:'30vh',
    padding: '2rem',
   
})

const Image = styled('img')({
    objectFit: 'cover',
    width: '70%',
    height: 'auto'
})

const SidebarContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '0',
    width: '20rem',
    height: '100vh',
    backgroundColor:'#fff'
})

const SidebarOptions = styled('div')({
    background: 'rgb(158,165,235)',
    background: 'linear-gradient(90deg, rgba(158,165,235,1) 0%, rgba(43,57,183,1) 56%, rgba(89,93,133,1) 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    height: '70vh',
})

const SidebarUser = () => {
  return (
    <SidebarContainer>
        <UserPhoto>
            <Image src={userPhoto}/>
        </UserPhoto>

    </SidebarContainer>
  )
}

export default SidebarUser