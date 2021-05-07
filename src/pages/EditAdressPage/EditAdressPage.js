import React from 'react'
import AdressForm from '../../components/AdressForm/AdressForm'
import { Container } from '../../components/Container/Container'
import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'

function EditAdressPage(){
  return (
    <Container>
      <Header needHeader="true" text="Endereço"/>
      {/* <Title text="Editar Endereço"/> */}
      <AdressForm />
    </Container>
  )
}

export default EditAdressPage