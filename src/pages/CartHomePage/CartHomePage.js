import React, { useEffect, useState } from 'react'
import removeToCart from '../../functions/removeToCart'
import { Container } from '../../components/Container/Container'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import useRequestData from '../../hooks/useRequestData'
import {
  Text, Adress,
  CardItem, Main, DeliveryAdress, ImageItem,
  ContainerInfoProducts, NameProduct,
  DescriptionProduct, Price, Button, ContainerButton,
  Flex, Quantity, Subtotal, SubtotalText,
  CenteredP
} from './styled'
import Loading from '../../components/Loading/Loading'

function CartPage() {
  const cart = localStorage.getItem('cart')
  const cartList = JSON.parse(cart)
  const [cartProducts, setCartProducts] = useState([])
  const userInfos = useRequestData({}, 'profile')

  useEffect(() => {
    setCartProducts(cartList)
  }, [])

  let amount = 0
  const listOfOrders = cartProducts && cartProducts.map((product) => {
    amount += product.price * product.quantity

    return <CardItem key={product.id}>
      <ImageItem src={product.photoUrl} />
      <ContainerInfoProducts>
        <Flex>
          <NameProduct>{product.category}</NameProduct>
          <Quantity>{product.quantity}</Quantity>
        </Flex>

        <DescriptionProduct>{product.description}</DescriptionProduct>
        <Flex>
          <Price>R${product.price.toFixed(2)}</Price>
          <ContainerButton>
            <Button onClick={() => removeToCart(product.id, cartProducts, setCartProducts)}>remover</Button>
          </ContainerButton>
        </Flex>
      </ContainerInfoProducts>
    </CardItem>
  })


  return <Container>

    <Header text="Meu carrinho" needHeader="true" />
    {!userInfos ? <Loading /> :
      <Main>
        <DeliveryAdress>
          <Text>Endereço de entrega</Text>
          <Adress>{userInfos.user && userInfos.user.address}</Adress>
        </DeliveryAdress>

        {cartList.length === 0 ? <CenteredP>Carrinho vazio</CenteredP> :
          <>
            {listOfOrders}

            <Subtotal>
              <SubtotalText>SUBTOTAL</SubtotalText>
           R${cartList.length === 0 ? '00.00' : amount.toFixed(2)}
            </Subtotal>
          </>
        }
        <Footer activeCart="true" />
      </Main>

    }
  </Container >
}

export default CartPage