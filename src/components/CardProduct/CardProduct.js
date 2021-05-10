import React, { useEffect } from 'react'
import styled from 'styled-components'
import { CardItem, ImageItem, ContainerInfoProducts, NameProduct, DescriptionProduct, Price, Button, Flex, ContainerButton, ButtonProvover, Input } from './styled'
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
  const initRef = React.useRef()
  

  return <CardItem>
    <ImageItem src={props.photoUrl} />

    <ContainerInfoProducts>
      {/* <Quantityca>{props.quantity>0? props.quantity : '12'}</Quantityca>  AQUI E ONDE VAI APAREER O N° */}
      <NameProduct>{props.name}</NameProduct>
      <DescriptionProduct>{props.description}</DescriptionProduct>
      <Flex>
        <Price>R${props.price}</Price>
        <Popover closeOnBlur={false} placement="left" initialFocusRef={initRef}>
          {({ isOpen, onClose }) => (
            <>
              <PopoverTrigger>
                <Button>adicionar</Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent
                  padding={'2rem 1.5rem'}>
                  <PopoverCloseButton />
                  <PopoverBody>
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
                      onClick={function (event) { props.onClick(); onClose() }}
                      ref={initRef}
                    >
                      ADICIONAR AO CARRINHO
                </ButtonProvover>
                  </PopoverBody>
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