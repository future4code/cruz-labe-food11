import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { Box } from '@chakra-ui/layout'
import useProtectedPage from '../../hooks/useProtectedPage'
import logout from '../../functions/logout'
import styled from 'styled-components'
function HomePage() {
  
  useProtectedPage()

  const restaurants = useRequestData([], 'restaurants')
  const history = useHistory()
  const [filteredRestaurants,setFilteredRestaurants] = useState([])

  const goToDetails = (id) => {
    history.push(`/restaurante/${id}`)
  }


  

const filterFunc = (event) => {
  const search = event.target.value.toLowerCase()
  const newRestaurants = restaurants.restaurants.filter((restaurant) =>restaurant.name.toLowerCase().indexOf(search) >=0)
  setFilteredRestaurants(newRestaurants)
  

  }
      const listRestaurants =  restaurants.restaurants && restaurants.restaurants.map((restaurant) => {
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

    const filtered = filteredRestaurants.map((restaurant) => {

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
       <Input onChange={filterFunc} type='text' placeholder="Busca por restaurantes"/>
       {filteredRestaurants.length>0 ? filtered : <div> Nada encontrado</div> }
     </div>
    
  )

}

export default HomePage

const Input   = styled.input`
border:1px solid black;
`