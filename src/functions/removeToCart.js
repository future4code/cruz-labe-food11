const removeToCart = (id, listProducts, setListProducts) => {
  const copyCartProducts = [...listProducts]

  const index = listProducts.findIndex((item) => {
    return item.id === id
  })

  for (let i = 0; i < copyCartProducts.length; i++) {
    if (i === index) {
      if (copyCartProducts[i].quantity > 1) {
        copyCartProducts[i].quantity -= 1
      } else {
        copyCartProducts.splice(index, 1)
      }
    }
  }

  setListProducts(copyCartProducts)
  localStorage.setItem('cart', JSON.stringify(copyCartProducts))
}

export default removeToCart