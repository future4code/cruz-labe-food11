import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { CardRestaurant, Image, NameRestaurant, Category, DeliveryTime, Shipping, FlexContainer, Address, Title, ButtonCart } from './styled'
import Header from '../../components/Header/Header'
import { Container } from '../../components/Container/Container'
import { goToCartPage } from '../../routes/coordinator'
import Loading from '../../components/Loading/Loading'
import ProductsByCategory from '../../components/ProductsByCategory/ProductsByCategory'
import useForm from '../../hooks/useForm'

function RestaurantDetailsPage() {
  const params = useParams()
  const history = useHistory()
  const restaurantDetails = useRequestData({}, `restaurants/${params.id}`)
  const [listOfRequests, setListOfRequests] = useState([])
  const [form, onChangeInput] = useForm({quantity: 1})

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(listOfRequests))
  })



  return (
    <Container>
      {!restaurantDetails.restaurant ? <Loading /> :
        <div>


          <restaurantDetails>
            <Header needHeader="true" text="Restaurante" />
            <CardRestaurant>
              <Image src={restaurantDetails.restaurant && restaurantDetails.restaurant.logoUrl} alt={'logo restaurante'} />
              <NameRestaurant>{restaurantDetails.restaurant && restaurantDetails.restaurant.name}</NameRestaurant>

              <Category>{restaurantDetails.restaurant && restaurantDetails.restaurant.category}</Category>

              <FlexContainer>
                <DeliveryTime>{restaurantDetails.restaurant && restaurantDetails.restaurant.deliveryTime - 10} - {restaurantDetails.restaurant && restaurantDetails.restaurant.deliveryTime} min</DeliveryTime>

                <Shipping>Frete R${restaurantDetails.restaurant && restaurantDetails.restaurant.shipping.toFixed(2)}</Shipping>
              </FlexContainer>
              <Address>{restaurantDetails.restaurant && restaurantDetails.restaurant.address}</Address>
            </CardRestaurant>
          </restaurantDetails>

          <ProductsByCategory
            restaurantDetails={restaurantDetails}
            listOfRequests={listOfRequests}
            setListOfRequests={setListOfRequests}
            name={'quantity'}
            value={form.quantity}
            onChange={onChangeInput}
          />

          <ButtonCart onClick={() => goToCartPage(history)} bg={"red"} color={'white'}>Carrinho</ButtonCart>
        </div>
      }
    </Container >
  )
}

export default RestaurantDetailsPage