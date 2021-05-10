const addToCart = (quantity, productAddedToCart, productsCart, setProductsCart) => {
  if (quantity > 0) {
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
    // console.log('quantity: ',quantity)
    // console.log('productCart: ',productsCart)
    alert('Adicionado ao carrinho')
  } else {
    alert('Adicione quantidade válida (acima de 0)')
  }

}

export default addToCart