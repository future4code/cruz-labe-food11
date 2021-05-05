import React from 'react'

function ActiveOrder(props) {
  return (
    <div>
      <b>pedidos ativos</b>
      <p>{props.restaurantName}</p>
      <p>R${props.totalPrice}</p>
    </div>
  )
}

export default ActiveOrder