import React from 'react'
import { Box } from '@chakra-ui/react'

function CartPage() {
  const cartProductsString = localStorage.getItem('cart')
  const cartProducts = JSON.parse(cartProductsString)

  const cartProductsList = cartProducts.map((product) => {
    return <Box border={'1px solid black'}>
      <p>{product.quantity}x</p>
      <p>{product.name}</p>
      <p>R${product.price}</p>
    </Box>
  })

  return <div>
    <b>Carrinho</b>
    {cartProductsList}
  </div>
}

export default CartPage