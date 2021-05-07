import React from 'react'
import filterProductsByCategory from '../../functions/filterProductsByCategory'
import CardProduct from '../../components/CardProduct/CardProduct'
import addToCart from '../../functions/addToCart'
import {Title} from './styled'

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
      onClick={() => addToCart(props.value, product, listOfRequests, setListOfRequests)}
      nameInput={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  })

  const accompaniments = accompanimentsFiltering && accompanimentsFiltering.map((product) => {
    return <CardProduct
      key={product.id}
      photoUrl={product.photoUrl}
      name={product.name}
      description={product.description}
      price={product.price.toFixed(2)}
      onClick={() => addToCart(props.value, product, listOfRequests, setListOfRequests)}
      nameInput={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  })

  const drinks = drinksFiltering && drinksFiltering.map((product) => {
    return <CardProduct
      key={product.id}
      photoUrl={product.photoUrl}
      name={product.name}
      description={product.description}
      price={product.price.toFixed(2)}
      onClick={() => addToCart(props.value, product, listOfRequests, setListOfRequests)}
      nameInput={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  })

  const desserts = dessertFiltering && dessertFiltering.map((product) => {
    return <CardProduct
      key={product.id}
      photoUrl={product.photoUrl}
      name={product.name}
      description={product.description}
      price={product.price.toFixed(2)}
      onClick={() => addToCart(props.value, product, listOfRequests, setListOfRequests)}
      nameInput={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  })

  return (
    <div>
      <Title>Principais</Title>
      {mainProducts}

      <Title>Acompanhamentos</Title>
      {accompaniments}

      <Title>Bebidas</Title>
      {drinks}

      <Title>Sobremesas</Title>
      {desserts}
    </div>


  )

}

export default ProductsByCategory