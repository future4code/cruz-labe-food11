const addToCart = (productAddedToCart, productsCart, setProductsCart) => {
  const isInCart = productsCart.find((product) => {
    return product.id === productAddedToCart.id
  })

  if (isInCart) {
    const updateListOfProducts = productsCart.map((product) => {
      if (product.id === productAddedToCart.id) {
        return {
          ...product,
          quantity: product.quantity + 1
        }
      }
      return product
    })
    setProductsCart(updateListOfProducts)


  } else {
    const newProductAdded = {
      id: productAddedToCart.id,
      quantity: 1
    }

    setProductsCart([...productsCart, newProductAdded])
  }

  alert('Adicionado ao carrinho')
}

export default addToCart