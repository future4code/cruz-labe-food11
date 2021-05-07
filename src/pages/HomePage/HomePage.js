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
import Header from '../../components/Header/Header'
import { Container } from '../../components/Container/Container'
import Footer from '../../components/Footer/Footer'
import { LogoRestaurant, StyledBox, H2Nome, H2, Div, DivInfos, OverFlowContainer } from './styled'
import Loading from '../../components/Loading/Loading'

function HomePage() {
  useProtectedPage()
  const activeOrder = useRequestData({}, 'active-order')
  const [filteredRestaurants, setFilteredRestaurants] = useState(useRequestData([], 'restaurants'))
  const [isSearching, setIsSearching] = useState(false)
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
    console.log('res.data: ', response.data)
  }


  const filterFunc = (event) => {
    const search = event.target.value.toLowerCase()
    const newRestaurants = restaurants.restaurants.filter((restaurant) => restaurant.name.toLowerCase().indexOf(search) >= 0)
    setFilteredRestaurants(newRestaurants)
    if (event.target.value.length === 0) {
      setIsSearching(false)
    } else {
      setIsSearching(true)
    }
  }




  const filtered = restaurants && restaurants.restaurants && filteredRestaurants.map((restaurant) => {

    return (
      <OverFlowContainer>

        <StyledBox
          key={restaurant.key}
          onClick={() => goToDetails(restaurant.id)}
        >
          <LogoRestaurant src={restaurant.logoUrl} alt={'logo do restaurante'} />
          <DivInfos>
            <H2Nome>{restaurant.name}</H2Nome>
            <Div>
              <H2>{restaurant.deliveryTime} min</H2>
              <H2> Frete R$ {restaurant.shipping},00</H2>
            </Div>
          </DivInfos>



        </StyledBox>
      </OverFlowContainer>

    )
  })

  return (
    <Container>
      <Header text="Ifuture" />
      {!restaurants.restaurants ? <Loading /> :
        <>
          <Input onChange={filterFunc} type='text' placeholder="Restaurantes" />
          {filteredRestaurants.length > 0 ? filtered : <div> Nada encontrado</div>}
          {activeOrder.order && <ActiveOrder restaurantName={activeOrder.order.restaurantName} totalPrice={activeOrder.order.totalPrice} />}
          { isSearching ? <></> : <Footer activeHome="true" />}
        </>
      }
    </Container>
  )
}

export default HomePage

const Input = styled.input`
border:1px solid black;
display:block;
`