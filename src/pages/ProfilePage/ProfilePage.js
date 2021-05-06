import React, { useState } from 'react'
import { Button } from '@chakra-ui/react'
import useRequestData from '../../hooks/useRequestData'
import { useHistory } from 'react-router-dom'
import { goToEditProfilePage, goToEditAdressPage } from '../../routes/coordinator'
import Footer from '../../components/Footer/Footer'

function ProfilePage() {
  const profile = useRequestData({}, 'profile')
  const history = useHistory() 
  return (
    <div>
      <p>{profile.user && profile.user.name}</p>
      <p>{profile.user && profile.user.cpf}</p>
      <p>{profile.user && profile.user.email}</p>
      <Button  onClick={() => goToEditProfilePage(history)}>Editar perfil</Button>
      <br /><br />
      <b>Endereço: </b>
      <p>{profile.user && profile.user.address}</p>
      <Button  onClick={() => goToEditAdressPage(history)}>Editar endereço</Button>
      <Footer activeHome='true'/>
      {/* onSubmit={(evt) => loginOrSignUp('login', form, history, evt) */}
    </div>
  )
}

export default ProfilePage
