import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { Box } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'

function RestaurantDetailsPage() {
  const [listOfRequests, setListOfRequests] = useState([])
  const params = useParams()
  const restaurantDetails = useRequestData({}, `restaurants/${params.id}`)

  const addToCart = (productAddedToCart) => {
    const isInCart = listOfRequests.find((product) => {
      return product.id === productAddedToCart.id
    })

    if(isInCart){
      const updateListOfProducts = listOfRequests.map((product) => {
        if(product.id === productAddedToCart.id){
          return {
            ...product,
            quantity: product.quantity + 1
          }
        }
        return product
      })
      setListOfRequests(updateListOfProducts)


    } else {
      const newProductAdded = {
        id: productAddedToCart.id,
        quantity: 1
      }

      setListOfRequests([...listOfRequests, newProductAdded])
    }

    alert('Adicionado ao carrinho')
  }

  const products = restaurantDetails.restaurant && restaurantDetails.restaurant.products.map((product) => {
    return (
      <Box border={'1px solid black'} key={product.id}>
        <p>{product.name}</p>
        <p>{product.description}</p>
        <Button onClick={() => addToCart(product)} bg={'#c4c4c4'}>Adicionar ao carrinho</Button>
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