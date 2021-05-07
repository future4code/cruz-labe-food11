import React from 'react'
import { Container } from '../../components/Container/Container'
import Header from '../../components/Header/Header'
import EditProfileForm from './EditProfileForm'
import { useHistory } from 'react-router-dom'

function EditProfilePage() {
  const history = useHistory() 
  return (
    <Container>
      <Header needHeader="true" text="Editar"/>
      <EditProfileForm />
    </Container>
  )
}

export default EditProfilePage