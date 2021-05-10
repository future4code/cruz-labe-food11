import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import addToCart from '../../functions/addToCart'
import removeToCart from '../../functions/removeToCart'
import { CardItem, ImageItem, ContainerInfoProducts, NameProduct, DescriptionProduct, Price, Button, Flex, ContainerButton, ButtonProvover, Input, ButtonGroup, ButtonProvoverCancel } from './styled'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Portal
} from "@chakra-ui/react"


function CardProduct(props) {
  const { restaurantDetails, listOfRequests, setListOfRequests } = props
  const initRef = React.useRef()
  const [cartProducts, setCartProducts] = useState([])
  const cartProductsString = localStorage.getItem('cart')
  const [isInTheCart, setIsInTheCart] = useState(false)

  let textButtonAddOrRemove
  if (isInTheCart) {
    textButtonAddOrRemove = 'remover'
  } else {
    textButtonAddOrRemove = 'adicionar'
  }

  let colorButton, borderButton
  if(isInTheCart){
    colorButton = '#e8222f'
    borderButton = '1px solid #e8222f'
  } else {
    colorButton = '#000'
    borderButton = '1px solid #000'
  }


  useEffect(() => {
    setCartProducts(JSON.parse(cartProductsString))
  }, [cartProductsString])

  return <CardItem>
    <ImageItem src={props.photoUrl} />

    <ContainerInfoProducts>
      <NameProduct>{props.name}</NameProduct>
      <DescriptionProduct>{props.description}</DescriptionProduct>
      <Flex>
        <Price>R${props.price}</Price>
        <Popover closeOnBlur={false} placement="left" initialFocusRef={initRef}>
          {({ isOpen, onClose }) => (
            <>
              <PopoverTrigger>
                <Button border={borderButton} color={colorButton}>{textButtonAddOrRemove}</Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent
                  padding={'2rem 1.5rem'}>
                  <PopoverCloseButton />
                  {!isInTheCart ? <PopoverBody>
                    <PopoverArrow />
                    <PopoverHeader>Selecione a quantidade desejada</PopoverHeader>
                    <PopoverCloseButton />
                    <ContainerButton>
                    </ContainerButton>
                    <Input
                      type={'number'}
                      name={props.nameInput}
                      value={props.value}
                      onChange={props.onChange}
                    />
                    <ButtonProvover
                      mt={4}
                      colorScheme="blue"
                      onClick={function (event) { addToCart(props.value, props.product, listOfRequests, setListOfRequests, setIsInTheCart); onClose() }}
                      ref={initRef}
                    >
                      ACICIONAR AO CARRINHO
                    </ButtonProvover>
                  </PopoverBody>

                    :


                    <PopoverBody>
                      <PopoverArrow />
                      <PopoverHeader>Deseja mesmo remover item do carrinho?</PopoverHeader>
                      <PopoverCloseButton />
                      <ContainerButton>
                      </ContainerButton>
                      <ButtonGroup>
                        <ButtonProvoverCancel
                          mt={4}
                          colorScheme="blue"
                          onClick={function (event) { removeToCart(props.poductId, listOfRequests, setListOfRequests, setIsInTheCart); onClose() }}
                          ref={initRef}
                        >
                          SIM
                      </ButtonProvoverCancel>
                        <ButtonProvover
                          mt={4}
                          colorScheme="blue"
                          onClick={() => onClose()}
                          ref={initRef}
                        >
                          CANCELAR
                      </ButtonProvover>
                      </ButtonGroup>
                    </PopoverBody>
                  }
                </PopoverContent>
              </Portal>
            </>
          )}
        </Popover>







      </Flex>
    </ContainerInfoProducts>
  </CardItem>
}

export default CardProduct

const Quantityca = styled.p`
width: 2.063rem;
height: 2.063rem;
border-radius: 0 8px  0 8px;
border: solid 1px #e8222e;
position:absolute;
top: 0;
right:0;
display:flex;
align-items:center;
justify-content:center;
color:#e8222e
`