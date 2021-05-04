import { Box } from '@chakra-ui/layout'
import React from 'react'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'

function RestaurantDetailsPage() {
  const params = useParams()
  const restaurantDetails = useRequestData({}, `restaurants/${params.id}`)
  console.log(restaurantDetails.restaurant)

  const products = restaurantDetails.restaurant && restaurantDetails.restaurant.products.map((product) => {
    return (
      <Box border={'1px solid black'} key={product.id}>
        <p>{product.name}</p>
        <p>{product.description}</p>
      </Box>
    )
  })
  return (
    <div>
      <img src={restaurantDetails.restaurant && restaurantDetails.restaurant.logoUrl} alt={'logo restaurante'} />
      <p>{restaurantDetails.restaurant && restaurantDetails.restaurant.name}</p>

      <br />
      <b>Cárdapio</b>
      {products}
    </div>
  )
}

export default RestaurantDetailsPage