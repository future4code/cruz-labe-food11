import React from 'react'
import { useHistory } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { Box } from '@chakra-ui/layout'
import useProtectedPage from '../../hooks/useProtectedPage'
import logout from '../../functions/logout'
function HomePage() {
  useProtectedPage()

  const restaurants = useRequestData([], 'restaurants')
  const history = useHistory()

  const goToDetails = (id) => {
    history.push(`/restaurante/${id}`)
  }

  const listRestaurants = restaurants.restaurants && restaurants.restaurants.map((restaurant) => {
    return (
      <Box border='1px solid black'
        key={restaurant.id}
        onClick={() => goToDetails(restaurant.id)}
      >
        <img src={restaurant.logoUrl} alt={'logo do restaurante'} />
        <h3>{restaurant.name}</h3>
      </Box>
    )
  })
   return (
     <div>
       <button onClick={() => logout(history)}> logout </button>
       <div>{listRestaurants}</div>
     </div>
    
  )

}

export default HomePage