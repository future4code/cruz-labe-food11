import { Box } from '@chakra-ui/layout'
import React from 'react'
import useRequestData from '../../hooks/useRequestData'

function HomePage(){
  const restaurants = useRequestData([], 'restaurants')

  const listRestaurants = restaurants.restaurants && restaurants.restaurants.map((restaurant) => {
    return (
      <Box border='1px solid black'>
        <img src={restaurant.logoUrl} alt={'logo do restaurante'}/>
        <h3>{restaurant.name}</h3>
      </Box>
    )
  })
  return(
    <div>{listRestaurants}</div>
  )
}

export default HomePage