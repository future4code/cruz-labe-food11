import React from 'react'
import { Container } from '../../components/Container/Container'
import Header from '../../components/Header/Header'
import EditProfileForm from './EditProfileForm'

function EditProfilePage() {
  return (
    <Container>
      <Header needHeader="true" text="Editar"/>
      <EditProfileForm />
    </Container>
  )
}

export default EditProfilePage