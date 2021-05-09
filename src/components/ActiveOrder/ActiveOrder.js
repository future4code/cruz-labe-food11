import React from 'react'
import { ContainerOrder,StaticTextContainer,RestaurantNameContainer, PriceContainer } from './styled'
const ActiveOrder = (props) => {
  return (
    <ContainerOrder>
      <StaticTextContainer>Pedido em andamento</StaticTextContainer>
      <RestaurantNameContainer>{props.restaurantName}</RestaurantNameContainer>
      <PriceContainer>SUBTOTAL R${props.totalPrice}</PriceContainer>
    </ContainerOrder>
  )
}

export default ActiveOrder

