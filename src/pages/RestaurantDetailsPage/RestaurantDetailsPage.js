import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { Box } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'
import addToCart from '../../functions/addToCart'

function RestaurantDetailsPage() {
  const params = useParams()
  const history = useHistory()
  const restaurantDetails = useRequestData({}, `restaurants/${params.id}`)  
  const [listOfRequests, setListOfRequests] = useState([])

  useEffect(() => {
    localStorage.setItem('cart',JSON.stringify(listOfRequests))
  })

  const goToCart = (id) => {
    history.push(`/carrinho/${id}`)
  }
  
  const products = restaurantDetails.restaurant && restaurantDetails.restaurant.products.map((product) => { 
    return (
      <Box border={'1px solid black'} key={product.id}>
        <p>{product.name}</p>
        <p>{product.description}</p>
        <Button onClick={() => addToCart(product, listOfRequests, setListOfRequests)} bg={'#c4c4c4'}>Adicionar ao carrinho</Button>
      </Box>
    )
  })
  console.log(listOfRequests)
  return (
    <div>
      <img src={restaurantDetails.restaurant && restaurantDetails.restaurant.logoUrl} alt={'logo restaurante'} />
      <p>{restaurantDetails.restaurant && restaurantDetails.restaurant.name}</p>

      <br />
      <b>Cárdapio</b>
      {products}

      <Button onClick={() => goToCart(params.id)}bg={"red"} color={'white'}>Carrinho</Button>
    </div>
  )
}

export default RestaurantDetailsPage