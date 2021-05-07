import React from 'react'
import { Button, Box } from '@chakra-ui/react'
import useRequestData from '../../hooks/useRequestData'
import { useHistory } from 'react-router-dom'
import { goToEditProfilePage, goToEditAdressPage } from '../../routes/coordinator'
import Footer from '../../components/Footer/Footer'
import { Container } from '../../components/Container/Container'
import Header from '../../components/Header/Header'

function ProfilePage() {
  const profile = useRequestData({}, 'profile')
  const ordersHistory = useRequestData({}, 'orders/history')
  const history = useHistory() 

  const listOrderHistory = ordersHistory.orders && ordersHistory.orders.map((order) => {
    return <Box border={'1px solid black'}> 
      <p>{order.restaurantName}</p>
      <p>R${order.totalPrice.toFixed(2)}</p>
    </Box>
  })

  return (
    <Container>
      <Header text="Meu perfil" needHeader="true"/>
      <p>{profile.user && profile.user.name}</p>
      <p>{profile.user && profile.user.cpf}</p>
      <p>{profile.user && profile.user.email}</p>
      <Button  onClick={() => goToEditProfilePage(history)}>Editar perfil</Button>
      <br /><br />

      <b>Endereço: </b>
      <p>{profile.user && profile.user.address}</p>
      <Button  onClick={() => goToEditAdressPage(history)}>Editar endereço</Button>
      <Footer activeAvatar='true'/>
      <b>Histórico de pedidos</b> 
      {listOrderHistory}
      {/* onSubmit={(evt) => loginOrSignUp('login', form, history, evt) */}
    </Container>
  )
}

export default ProfilePage
