import React, { useEffect, useState } from 'react'

import filterProductsByCategory from '../../functions/filterProductsByCategory'
import CardProduct from '../../components/CardProduct/CardProduct'
import addToCart from '../../functions/addToCart'
import { Title } from './styled'

function ProductsByCategory(props) {
  const { restaurantDetails, listOfRequests, setListOfRequests } = props

  const mainFiltering = filterProductsByCategory(restaurantDetails, listOfRequests, setListOfRequests)

  const accompanimentsFiltering = filterProductsByCategory(restaurantDetails, listOfRequests, setListOfRequests, 'Acompanhamento')

  const drinksFiltering = filterProductsByCategory(restaurantDetails, listOfRequests, setListOfRequests, 'Bebida')

  const dessertFiltering = filterProductsByCategory(restaurantDetails, listOfRequests, setListOfRequests, 'Sorvete')


  const mainProducts = mainFiltering && mainFiltering.map((product) => {
    return <CardProduct
      key={product.id}
      photoUrl={product.photoUrl}
      name={product.name}
      description={product.description}
      price={product.price.toFixed(2)}
      nameInput={props.name}
      value={props.value}
      onChange={props.onChange}
      product={product}
      restaurantDetails={props.restaurantDetails}
      listOfRequests={props.listOfRequests}
      setListOfRequests={props.setListOfRequests}
      productId={product.id}
    />
  })
  const accompaniments = accompanimentsFiltering && accompanimentsFiltering.map((product) => {
    return <CardProduct
      key={product.id}
      photoUrl={product.photoUrl}
      name={product.name}
      description={product.description}
      price={product.price.toFixed(2)}
      nameInput={props.name}
      value={props.value}
      onChange={props.onChange}
      product={product}
      restaurantDetails={props.restaurantDetails}
      listOfRequests={props.listOfRequests}
      setListOfRequests={props.setListOfRequests}
      productId={product.id}
    />
  })

  const drinks = drinksFiltering && drinksFiltering.map((product) => {
    return <CardProduct
      key={product.id}
      photoUrl={product.photoUrl}
      name={product.name}
      description={product.description}
      price={product.price.toFixed(2)}
      nameInput={props.name}
      value={props.value}
      onChange={props.onChange}
      product={product}
      restaurantDetails={props.restaurantDetails}
      listOfRequests={props.listOfRequests}
      setListOfRequests={props.setListOfRequests}
      productId={product.id}
    />
  })

  const desserts = dessertFiltering && dessertFiltering.map((product) => {
    return <CardProduct
      key={product.id}
      photoUrl={product.photoUrl}
      name={product.name}
      description={product.description}
      price={product.price.toFixed(2)}
      nameInput={props.name}
      value={props.value}
      onChange={props.onChange}
      product={product}
      restaurantDetails={props.restaurantDetails}
      listOfRequests={props.listOfRequests}
      setListOfRequests={props.setListOfRequests}
      productId={product.id}
    />
  })

  console.log(desserts && desserts.length)
  return (
    <div>
      <Title>Principais</Title>
      {mainProducts}

      {accompaniments && accompaniments.length !== 0 && <Title>Acompanhamentos</Title>}
      {accompaniments && accompaniments.length !== 0 && accompaniments}

      {drinks && drinks.length !== 0 && <Title>Bebidas</Title>}
      {drinks && drinks.length !== 0 && drinks}


      {desserts && desserts.length !== 0 && <Title>Sobremesas</Title>}
      {desserts && desserts.length !== 0 && desserts}
    </div>


  )

}

export default ProductsByCategory