import React from 'react'


import {
    CardItem,  ImageItem,
    ContainerInfoProducts, NameProduct,
    DescriptionProduct, Price, Button, ContainerButton,
    Flex, Quantity
  } from './styled'



const CardItem = props => {




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
}