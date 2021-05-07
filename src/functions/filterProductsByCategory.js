function filterProductsByCategory(restaurantDetails, list, setList, category) {
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
  
  return filterByCategory
}

export default filterProductsByCategory