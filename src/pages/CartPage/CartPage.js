import React, { useEffect, useState } from 'react'
import { Box, Button } from '@chakra-ui/react'
import removeToCart from '../../functions/removeToCart'

function CartPage() {
  const [cartProducts, setCartProducts] = useState([])
  const cartProductsString = localStorage.getItem('cart')

  useEffect(() => {
    setCartProducts(JSON.parse(cartProductsString))
  }, [cartProductsString])

  const cartProductsList = cartProducts.map((product) => {
    return <Box border={'1px solid black'} key={product.id}>
      <p>{product.quantity}x</p>
      <p>{product.name}</p>
      <p>R${product.price}</p>
      <Button onClick={() => removeToCart(product.id, cartProducts, setCartProducts)} bg={'#c4c4c4'}>remover</Button>
    </Box>
  })

  return <div>
    <b>Carrinho</b>
    {cartProductsList}
  </div>
}

export default CartPage