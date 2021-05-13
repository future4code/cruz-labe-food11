const removeToCart = (id, listProducts, setListProducts, setIsInTheCart) => {
  const copyCartProducts = [...listProducts]

  const index = listProducts.findIndex((item) => {
    return item.id === id
  })

  for (let i = 0; i < copyCartProducts.length; i++) {
    if (i === index) {
      copyCartProducts.splice(index, 1)
    }
  }

  setListProducts(copyCartProducts)
  setIsInTheCart(false)
  localStorage.setItem('cart', JSON.stringify(copyCartProducts))
}

export default removeToCart