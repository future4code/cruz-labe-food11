import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import addToCart from '../../functions/addToCart'
import CardProduct from '../../components/CardProduct/CardProduct'
import { CardRestaurant, Main, Image, NameRestaurant, Category, DeliveryTime, Shipping, FlexContainer, Address, Title, CardItem, ImageItem, ContainerInfoProducts, NameProduct, DescriptionProduct, Price, Button, Flex, ButtonCart } from './styled'

function RestaurantDetailsPage() {
  const params = useParams()
  const history = useHistory()
  const restaurantDetails = useRequestData({}, `restaurants/${params.id}`)
  const [listOfRequests, setListOfRequests] = useState([])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(listOfRequests))
  })

  const goToCart = (id) => {
    history.push(`/carrinho/${id}`)
  }

  const mainProducts = restaurantDetails.restaurant && restaurantDetails.restaurant.products.map((product) => {
    if (product.category !== 'Acompanhamento' && product.category !== 'Bebida' && product.category !== 'Sorvete'){
      return (
        <CardProduct 
          key={product.id}
          photoUrl={product.photoUrl}
          name={product.name}
          description={product.description}
          price={product.price.toFixed(2)}
          onClick={() => addToCart(product, listOfRequests, setListOfRequests)}
        />
      )
    }
      
  })

  const accompaniments = restaurantDetails.restaurant && restaurantDetails.restaurant.products.map((product) => {
    if (product.category === 'Acompanhamento'){
      return (
        <CardProduct 
          key={product.id}
          photoUrl={product.photoUrl}
          name={product.name}
          description={product.description}
          price={product.price.toFixed(2)}
          onClick={() => addToCart(product, listOfRequests, setListOfRequests)}
        />
      )
    }
      
  })

  const drinks = restaurantDetails.restaurant && restaurantDetails.restaurant.products.map((product) => {
    if (product.category === 'Bebida'){
      return (
        <CardProduct 
          key={product.id}
          photoUrl={product.photoUrl}
          name={product.name}
          description={product.description}
          price={product.price.toFixed(2)}
          onClick={() => addToCart(product, listOfRequests, setListOfRequests)}
        />
      )
    }
      
  })

  const dessert = restaurantDetails.restaurant && restaurantDetails.restaurant.products.map((product) => {
    if (product.category === 'Sorvete'){
      return (
        <CardProduct 
          key={product.id}
          photoUrl={product.photoUrl}
          name={product.name}
          description={product.description}
          price={product.price.toFixed(2)}
          onClick={() => addToCart(product, listOfRequests, setListOfRequests)}
        />
      )
    }
      
  })

  return (
    <Main>
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

      <Title>Principais</Title>
      {mainProducts}

      <Title>Acompanhamentos</Title>
      {accompaniments}

      <Title>Bebidas</Title>
      {drinks}

      <Title>Sobremesas</Title>
      {dessert}

      <ButtonCart onClick={() => goToCart(params.id)} bg={"red"} color={'white'}>Carrinho</ButtonCart>
    </Main >
  )
}

export default RestaurantDetailsPage