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
    console.log('new productAdded: ',newProductAdded)
    console.log('producstCart ate o momento: ',productsCart)
    console.log('cart : ',localStorage.getItem('cart'))
    setProductsCart([...productsCart, newProductAdded])
    alert('Adicionado ao carrinho')
  } else {
    alert('Adicione quantidade válida (acima de 0)')
  }

}

export default addToCart