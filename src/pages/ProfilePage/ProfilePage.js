import React from 'react'
import { Button } from '@chakra-ui/react'
import useRequestData from '../../hooks/useRequestData'
import { useHistory } from 'react-router-dom'
import { goToEditProfilePage, goToEditAdressPage } from '../../routes/coordinator'

function ProfilePage() {
  const profile = useRequestData({}, 'profile')
  const ordersHistory = useRequestData({}, 'orders/history')
  const history = useHistory() 

  const listOrderHistory = ordersHistory.orders && ordersHistory.orders.map((order) => {
    return <div> 
      <p>{order.restaurantName}</p>
      <p>R${order.totalPrice.toFixed(2)}</p>
    </div>
  })

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
      <br /><br />
      
      <b>Histórico de pedidos</b> 
      {listOrderHistory}
    </div>
  )
}

export default ProfilePage
