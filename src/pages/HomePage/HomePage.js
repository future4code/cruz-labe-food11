import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import useProtectedPage from '../../hooks/useProtectedPage'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'
import ActiveOrder from '../../components/ActiveOrder/ActiveOrder'
import Header from '../../components/Header/Header'
import { Container } from '../../components/Container/Container'
import Footer from '../../components/Footer/Footer'
import { LogoRestaurant, StyledBox, H2Nome, H2, Div, DivInfos, OverFlowContainer, UL, LI, SearchIcon, ContainerSearchInput, Input, NotFoundMessage } from './styled'
import Loading from '../../components/Loading/Loading'

function HomePage() {
  useProtectedPage()
  const activeOrder = useRequestData({}, 'active-order')
  const [filteredRestaurants, setFilteredRestaurants] = useState(useRequestData([], 'restaurants'))
  const [isSearching, setIsSearching] = useState(false)
  const restaurants = useRequestData([], 'restaurants')
  const history = useHistory()
  const [activeCategory, setActiveCategory] = useState('')

  const goToDetails = (id) => {
    history.push(`/restaurante/${id}`)
  }
  useEffect(() => {
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
    if (event.target.value.length === 0) {
      setIsSearching(false)
    } else {
      setIsSearching(true)
    }
  }

  const filterByType = (category) => {
    const restaurantsByCategory = restaurants.restaurants.filter((restaurant) => category === restaurant.category)
    setFilteredRestaurants(restaurantsByCategory)
    setActiveCategory(category)
  }

  const category = restaurants && restaurants.restaurants && restaurants.restaurants.map((restaurant) => {

    return (
      
     <LI style={activeCategory===restaurant.category ? {color:'red'} : {color:'black'} }
      onClick={ () => filterByType(restaurant.category) }
      > 
     { restaurant.category }
     </LI>
    )
})

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
    {!restaurants.restaurants ? <Loading /> :
      <>
       {  !isSearching ? <Header text="iFuture" /> : <Header text="Busca" />}
        <ContainerSearchInput>
          <SearchIcon />
          <Input onChange={filterFunc} type='text' placeholder="Restaurante" />

        </ContainerSearchInput>
        <UL>
          {category}
        </UL>
        {filteredRestaurants.length > 0 ? filtered : <NotFoundMessage> Não encontramos :(</NotFoundMessage>}
        {activeOrder.order && <ActiveOrder restaurantName={activeOrder.order.restaurantName} totalPrice={activeOrder.order.totalPrice} />}
        { isSearching ? <></> : <Footer activeHome="true" />}
      </>
    }
  </Container>
)
}

export default HomePage
