import React from 'react'
import AdressForm from '../../components/AdressForm/AdressForm'
import { Container } from '../../components/Container/Container'
import Header from '../../components/Header/Header'

function EditAdressPage(){
  return (
   
    <Container>
      <Header needHeader="true" text="Endereço"/>
      <AdressForm />
    </Container>
  )
}

export default EditAdressPage