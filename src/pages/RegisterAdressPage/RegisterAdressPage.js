import React from 'react'
import AdressForm from '../../components/AdressForm/AdressForm'
import Title from '../../components/Title/Title'
import styled from 'styled-components'
function RegisterAdressPage() {
  return (
    <Container>
      <Title text={'Meu endereço'}/>
      <AdressForm />
    </Container >
  )
}

export default RegisterAdressPage


const Container = styled.div`
display:flex;
flex-direction:column;
margin:10vh auto;
align-items:center;
`