import React from 'react'
import { ContainerOrder,StaticTextContainer,RestaurantNameContainer, PriceContainer,Clock } from './styled'
const ActiveOrder = (props) => {
  return (
    <ContainerOrder>
      <Clock/>
      <StaticTextContainer>Pedido em andamento</StaticTextContainer>
      <RestaurantNameContainer>{props.restaurantName}</RestaurantNameContainer>
      <PriceContainer>SUBTOTAL R${props.totalPrice}</PriceContainer>
    </ContainerOrder>
  )
}

export default ActiveOrder

