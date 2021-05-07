import React from 'react'
import CardProduct from '../components/CardProduct/CardProduct'
import addToCart from './addToCart'

function listProductsByCategory(restaurantDetails, list, setList, category) {
  let filterByCategory = []
  if (category) {
    filterByCategory = restaurantDetails.restaurant && restaurantDetails.restaurant.products.filter((product) => {
      return product.category === category
    })

  } else {
    filterByCategory = restaurantDetails.restaurant && restaurantDetails.restaurant.products.filter((product) => {
      return product.category !== 'Sorvete' && product.category !== 'Bebida' && product.category !== 'Acompanhamento'
    })

  }
  const productByCategory = filterByCategory && filterByCategory.map((product) => {
    return <CardProduct
      key={product.id}
      photoUrl={product.photoUrl}
      name={product.name}
      description={product.description}
      price={product.price.toFixed(2)}
      onClick={() => addToCart(product, list, setList)}
    />
  })

  return productByCategory
}

export default listProductsByCategory