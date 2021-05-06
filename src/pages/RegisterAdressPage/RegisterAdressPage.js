import React from 'react'
import AdressForm from '../../components/AdressForm/AdressForm'
import Title from '../../components/Title/Title'
import { Container } from '../../components/Container/Container'
function RegisterAdressPage() {
  return (
    <Container>
      <Title text={'Meu endereço'}/>
      <AdressForm />
    </Container >
  )
}

export default RegisterAdressPage

