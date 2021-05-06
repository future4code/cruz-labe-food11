import React from 'react'
import { CardItem, ImageItem, ContainerInfoProducts, NameProduct, DescriptionProduct, Price, Button, Flex } from './styled'

function CardProduct(props) {
  return <CardItem>
    <ImageItem src={props.photoUrl} />

    <ContainerInfoProducts>
      <NameProduct>{props.name}</NameProduct>
      <DescriptionProduct>{props.description}</DescriptionProduct>
      <Flex>
        <Price>R${props.price}</Price>
        <Button onClick={props.onClick}>adicionar</Button>
      </Flex>
    </ContainerInfoProducts>
  </CardItem>
}

export default CardProduct