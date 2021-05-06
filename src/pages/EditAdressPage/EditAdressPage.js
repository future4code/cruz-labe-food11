import React from 'react'
import AdressForm from '../../components/AdressForm/AdressForm'
import { Container } from '../../components/Container/Container'
import Title from '../../components/Title/Title'

function EditAdressPage(){
  return (
    <Container>
      <Title text="Editar Endereço"/>
      <AdressForm />
    </Container>
  )
}

export default EditAdressPage