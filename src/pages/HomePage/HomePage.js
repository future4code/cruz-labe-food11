import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { Box } from '@chakra-ui/layout'
import useProtectedPage from '../../hooks/useProtectedPage'
import logout from '../../functions/logout'
import styled from 'styled-components'
import { BASE_URL } from '../../constants/url'
import axios from 'axios'
import ActiveOrder from '../../components/ActiveOrder/ActiveOrder'
function HomePage() {
  useProtectedPage()
  const activeOrder = useRequestData({}, 'active-order')
  console.log(activeOrder)
  const [filteredRestaurants, setFilteredRestaurants] = useState(useRequestData([], 'restaurants'))

  const restaurants = useRequestData([], 'restaurants')
  const history = useHistory()

  const goToDetails = (id) => {
    history.push(`/restaurante/${id}`)
  }
  useEffect(() => {
    console.log("filtered: ", filteredRestaurants)
    setRestaurants()
  }, [])

  const setRestaurants = async () => {
    const response = await axios.get(`${BASE_URL}restaurants`, {
      headers: {
        auth: localStorage.getItem('token')
      }
    })
    setFilteredRestaurants(response.data.restaurants)
  }


  const filterFunc = (event) => {
    const search = event.target.value.toLowerCase()
    const newRestaurants = restaurants.restaurants.filter((restaurant) => restaurant.name.toLowerCase().indexOf(search) >= 0)
    setFilteredRestaurants(newRestaurants)
  }


  // const listRestaurants = restaurants.restaurants && restaurants.restaurants.map((restaurant) => {
  //   return (
  //     <Box border='1px solid black'
  //       key={restaurant.id}
  //       onClick={() => goToDetails(restaurant.id)}
  //     >
  //       <img src={restaurant.logoUrl} alt={'logo do restaurante'} />
  //       <h3>{restaurant.name}</h3>
  //     </Box>
  //   )
  // })

  const filtered = restaurants && restaurants.restaurants && filteredRestaurants.map((restaurant) => {

    return (
      <Box border='1px solid black'
        key={restaurant.key}
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
      <Input onChange={filterFunc} type='text' placeholder="Busca por restaurantes" />
      {filteredRestaurants.length > 0 ? filtered : <div> Nada encontrado</div>}
      {activeOrder.order && <ActiveOrder restaurantName={activeOrder.order.restaurantName} totalPrice={activeOrder.order.totalPrice}/>}
    </div>
  )
}

export default HomePage

const Input = styled.input`
border:1px solid black;
display:block;
`