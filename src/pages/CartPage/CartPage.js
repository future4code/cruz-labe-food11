import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button } from '@chakra-ui/react'
import { Radio, RadioGroup } from "@chakra-ui/react"
import removeToCart from '../../functions/removeToCart'
import placeOrder from '../../requests/placeOrder'

function CartPage() {
  const params = useParams()
  const [cartProducts, setCartProducts] = useState([])
  const [paymentMethod, setPaymentMethod] = useState('')
  const cartProductsString = localStorage.getItem('cart')

  useEffect(() => {
    setCartProducts(JSON.parse(cartProductsString))
  }, [cartProductsString])


  const productsToOrder = cartProducts.map((item) => {
    return {
      id: item.id,
      quantity: item.quantity
    }
  })
  const bodyApi = {
    products: productsToOrder,
    paymentMethod: paymentMethod
  }

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

    <b>Forma de pagamento</b>
    <RadioGroup onChange={setPaymentMethod} value={paymentMethod}>
      <Radio value="creditcard" checked>Cartão</Radio>
      <Radio value="money">Dinheiro</Radio>
    </RadioGroup>
    <Button onClick={() => placeOrder(params.id, bodyApi)} bg={'red'} color={'white'}> Realizar pedido </Button>
  </div>
}

export default CartPage