import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import removeToCart from '../../functions/removeToCart'
import placeOrder from '../../requests/placeOrder'
import { Container } from '../../components/Container/Container'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import useRequestData from '../../hooks/useRequestData'
import { Text, Adress, NameRestaurant, CardItem, Main, DeliveryAdress, ImageItem, ContainerInfoProducts, NameProduct, DescriptionProduct, Price, Button, ContainerButton, Flex, Quantity, Shipping, Subtotal, SubtotalText, TitlePayment, FormOfPayment, Radio, RadioGroup, ButtonConfirm } from './styled'

function CartPage() {
  const params = useParams()
  const userInfos = useRequestData({}, 'profile')
  const restaurantInfos = useRequestData({}, `restaurants/${params.id}`)
  const [cartProducts, setCartProducts] = useState([])
  const [paymentMethod, setPaymentMethod] = useState('money')
  const cartProductsString = localStorage.getItem('cart')

  useEffect(() => {
    setCartProducts(JSON.parse(cartProductsString)  )
    console.log('paymentMethod: ',paymentMethod)
  }, [cartProductsString])


  const productsToOrder = cartProducts.map((item) => {
    return {
      quantity: item.quantity,
      id: item.id
    }
  })
  const bodyApi = {
    products: productsToOrder,
    paymentMethod: paymentMethod
  }
  let amount = 0
  const cartProductsList = cartProducts.map((product) => {
    amount += product.price * product.quantity

    return <CardItem key={product.id}>
      <ImageItem src={product.photoUrl} />

      <ContainerInfoProducts>
        <Flex>
          <NameProduct>{product.name}</NameProduct>
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
  amount += restaurantInfos.restaurant && Number(restaurantInfos.restaurant.shipping)

  return <Container>
    <Header text="Meu carrinho" needHeader="true" />
    <Main>
      <DeliveryAdress>
        <Text>Endereço de entrega</Text>
        <Adress>{userInfos.user && userInfos.user.address}</Adress>
      </DeliveryAdress>


      {!cartProductsList ? <p>Carrinho vazio</p> :
        <>
          <NameRestaurant>{restaurantInfos.restaurant && restaurantInfos.restaurant.name}</NameRestaurant>
          <Text>{restaurantInfos.restaurant && restaurantInfos.restaurant.address}</Text>
          <Text>{restaurantInfos.restaurant && restaurantInfos.restaurant.deliveryTime - 10} - {restaurantInfos.restaurant && restaurantInfos.restaurant.deliveryTime} min</Text>
          {cartProductsList}
        </>}

      <Shipping>Frete R${restaurantInfos.restaurant && restaurantInfos.restaurant.shipping.toFixed(2)}</Shipping>
      <Subtotal><SubtotalText>SUBTOTAL</SubtotalText> R${amount.toFixed(2)}</Subtotal>

      <TitlePayment>Forma de pagamento</TitlePayment>
      {/* <FormOfPayment onChange={setPaymentMethod} value={paymentMethod}> */}
      <FormOfPayment onChange={event => {
    console.log('paymentMethod: ',paymentMethod)
   return setPaymentMethod(event.target.value)
    }}  >
        <RadioGroup>
          <Radio type={'radio'} value="money"  name="payMethod" checked />Dinheiro
        </RadioGroup>
        <RadioGroup>
          <Radio type={'radio'} value="creditcard"  name="payMethod" />Cartão de Crédito
        </RadioGroup>
        <RadioGroup>
          <Radio type={'radio'} value="teste"  name="payMethod" />Teste
        </RadioGroup>
        
      </FormOfPayment>
      <ButtonConfirm onClick={() => placeOrder(params.id, bodyApi)} bg={'red'} color={'white'}> Confirmar </ButtonConfirm>
      <Footer activeCart="true" />
    </Main>
  </Container>
}

export default CartPage