const addToCart = (productAddedToCart, productsCart, setProductsCart) => {
  const quantity = Number(prompt('Quantidade'))
  const newProductAdded = {
    category: productAddedToCart.category,
    id: productAddedToCart.id,
    description: productAddedToCart.description,
    name: productAddedToCart.name,
    photoUrl: productAddedToCart.photoUrl,
    price: productAddedToCart.price,
    quantity: quantity
  }

  setProductsCart([...productsCart, newProductAdded])
  alert('Adicionado ao carrinho')
}

export default addToCart