import React from 'react'
import AdressForm from '../../components/AdressForm/AdressForm'
import Title from '../../components/Title/Title'
import { Container } from '../../components/Container/Container'
import Header from '../../components/Header/Header'
function RegisterAdressPage() {
  return (
    <Container>
      <Header needHeader="true"/>
      <Title text={'Meu endereço'}/>
      <AdressForm />
    </Container >
  )
}

export default RegisterAdressPage

