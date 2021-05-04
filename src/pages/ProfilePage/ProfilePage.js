import React from 'react'
import { Button } from '@chakra-ui/react'
import useRequestData from '../../hooks/useRequestData'
import { useHistory } from 'react-router-dom'
import { goToEditProfilePage, goToEditAdressPage } from '../../routes/coordinator'

function ProfilePage() {
  const profile = useRequestData({}, 'profile')
  const history = useHistory() 

  return (
    <div>
      <p>{profile.user && profile.user.name}</p>
      <p>{profile.user && profile.user.cpf}</p>
      <p>{profile.user && profile.user.email}</p>
      <Button bg={'#c4c4c4'} onClick={() => goToEditProfilePage(history)}>Editar perfil</Button>
      <br /><br />
      <b>Endereço: </b>
      <p>{profile.user && profile.user.address}</p>
      <Button bg={'#c4c4c4'} onClick={() => goToEditAdressPage(history)}>Editar endereço</Button>
    </div>
  )
}

export default ProfilePage
