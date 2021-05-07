import React, { useState } from 'react'
import { Button } from '@chakra-ui/react'
import useRequestData from '../../hooks/useRequestData'
import { useHistory } from 'react-router-dom'
import { goToEditProfilePage, goToEditAdressPage } from '../../routes/coordinator'
import Footer from '../../components/Footer/Footer'
import { Container } from '../../components/Container/Container'
import Header from '../../components/Header/Header'

function ProfilePage() {
  const profile = useRequestData({}, 'profile')
  const history = useHistory() 
  return (
    <Container>
      <Header text="Meu perfil" needHeader="true"/>
      <p>{profile.user && profile.user.name}</p>
      <p>{profile.user && profile.user.cpf}</p>
      <p>{profile.user && profile.user.email}</p>
      <Button  onClick={() => goToEditProfilePage(history)}>Editar perfil</Button>
      <br /><br />
      <b>Endereço: </b>
      <p>{profile.user && profile.user.address}</p>
      <Button  onClick={() => goToEditAdressPage(history)}>Editar endereço</Button>
      <Footer activeAvatar='true'/>
      {/* onSubmit={(evt) => loginOrSignUp('login', form, history, evt) */}
    </Container>
  )
}

export default ProfilePage
